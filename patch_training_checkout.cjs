const fs = require('fs');

const checkoutClientPath = 'app/training-checkout/TrainingCheckoutClient.tsx';
const successPagePath = 'app/training/success/page.tsx';
const cancelPagePath = 'app/training/cancel/page.tsx';
const successClientPath = 'app/training/success/TrainingSuccessClient.tsx';
const cancelClientPath = 'app/training/cancel/TrainingCancelClient.tsx';

// We will overwrite the checkout client to match the old one
const checkoutClientCode = `"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Loader2, ArrowLeft, Sprout, Leaf, Sparkles, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { trackPaymentStep, pixelTrackCustom } from '../src/utils/pixel';
import { loadRazorpayScript } from '../src/utils/razorpay';
import { sendPaymentNotificationToFormspree } from '../src/utils/formspree';

export default function TrainingCheckoutClient({ type }: { type: "basic" | "advanced" | "offline-basic" | "offline-advanced" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: ""
  });

  const selectedProductType = type.includes('advanced') ? 'training_advanced' : 'training_basic';
  const selectedPrice = type.includes('advanced') ? '₹699' : '₹299';
  const selectedTitle = type.includes('advanced') ? 'Advanced Commercial Cultivation' : 'Basic Mushroom Farming';
  const isAdvancedTraining = type.includes('advanced');

  useEffect(() => {
    trackPaymentStep('CheckoutInitiated', { 
      product_type: selectedProductType, 
      price: selectedPrice,
      currency: 'INR' 
    });
    // Load script on mount
    loadRazorpayScript();
  }, [selectedProductType, selectedPrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email) {
      alert('Please fill in all details');
      return;
    }
    if (formData.mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);

    try {
      trackPaymentStep('CheckoutSubmitDetails', { 
        name: formData.name, 
        email: formData.email, 
        phone: formData.mobile 
      });

      const res = await fetch("/api/checkout-payload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: type,
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          amount: type.includes('advanced') ? 699 : 299
        }),
      });
      
      const text = await res.text();
      let payload;
      try {
        payload = JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON response:", text);
        throw new Error('Invalid JSON response from server');
      }
      
      if (!res.ok) throw new Error(payload?.error || 'Failed to fetch payload');

      // Send INITIATED notification to Formspree
      sendPaymentNotificationToFormspree({
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        productType: \`\${selectedTitle} Training\`,
        amount: selectedPrice,
        status: 'INITIATED',
        orderId: payload.order_id
      });

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || payload.key,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.order_id,
        name: payload.name,
        description: payload.description,
        prefill: payload.prefill,
        notes: payload.notes,
        theme: payload.theme,
        handler: function (response: any) {
          // Notify Formspree that payment is successful
          sendPaymentNotificationToFormspree({
            name: formData.name,
            phone: formData.mobile,
            email: formData.email,
            productType: \`\${selectedTitle} Training\`,
            amount: selectedPrice,
            status: 'DONE',
            orderId: payload.order_id,
            paymentId: response.razorpay_payment_id
          });

          trackPaymentStep('PaymentSuccess', {
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            product: selectedProductType,
            value: payload.amount / 100,
            currency: payload.currency
          });

          // Redirect to success
          setTimeout(() => {
             router.push(\`/training/success?id=\${response.razorpay_payment_id}&name=\${encodeURIComponent(formData.name)}&phone=\${encodeURIComponent(formData.mobile)}&email=\${encodeURIComponent(formData.email)}&type=\${selectedProductType}\`);
          }, 400);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            // Notify Formspree that payment form cancelled/not complete
            sendPaymentNotificationToFormspree({
              name: formData.name,
              phone: formData.mobile,
              email: formData.email,
              productType: \`\${selectedTitle} Training\`,
              amount: selectedPrice,
              status: 'CANCELLED',
              orderId: payload.order_id
            });

            trackPaymentStep('PaymentCancelled', {
              order_id: payload.order_id,
              product: selectedProductType
            });
            
            // Redirect to cancel
            router.push(\`/training/cancel?type=\${selectedProductType}&price=\${selectedPrice}\`);
          }
        }
      };

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        pixelTrackCustom('InitiateCheckout', {
          value: payload.amount / 100,
          currency: payload.currency,
          content_name: \`Training - \${selectedTitle}\`
        });

        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          console.error(response.error);
          setLoading(false);
          // Notify Formspree of failed payment
          sendPaymentNotificationToFormspree({
            name: formData.name,
            phone: formData.mobile,
            email: formData.email,
            productType: \`\${selectedTitle} Training\`,
            amount: selectedPrice,
            status: 'FAILED',
            orderId: payload.order_id,
            paymentId: response.error?.metadata?.payment_id
          });

          trackPaymentStep('PaymentFailed', {
            error_code: response.error?.code,
            error_description: response.error?.description,
            order_id: response.error?.metadata?.order_id,
            payment_id: response.error?.metadata?.payment_id
          });
          
          router.push(\`/training/cancel?type=\${selectedProductType}&price=\${selectedPrice}\`);
        });

        rzp.open();
      } else {
        console.error("Razorpay script not loaded properly");
        alert("Payment gateway not loaded. Please refresh the page.");
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#070707] bg-transparent flex flex-col items-center justify-center pt-24 pb-12 px-4 relative z-[99] overflow-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/20 dark:opacity-30 opacity-50 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-green-500/20 dark:opacity-30 opacity-50 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
      </div>

      {/* Floating 3D Elements for Desktop */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-32 left-[15%] hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl border dark:border-white/10 border-black/5 shadow-[0_20px_40px_-15px_rgba(37,211,102,0.3)] dark:bg-white/5 bg-white/60 backdrop-blur-xl"
      >
        <Sprout className="text-[#25D366] w-8 h-8 drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute bottom-32 right-[15%] hidden lg:flex items-center justify-center w-20 h-20 rounded-[2rem] border dark:border-white/10 border-black/5 shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] dark:bg-white/5 bg-white/60 backdrop-blur-xl"
      >
        <Leaf className="text-indigo-500 w-10 h-10 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/3 right-[20%] hidden lg:flex items-center justify-center w-12 h-12 rounded-full border dark:border-white/10 border-black/5 shadow-[0_15px_30px_-10px_rgba(234,179,8,0.3)] dark:bg-white/5 bg-white/60 backdrop-blur-xl"
      >
        <Sparkles className="text-yellow-500 w-6 h-6 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
      </motion.div>

      <div className="w-full max-w-md relative z-10 my-auto">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 transition-colors mb-6 font-medium text-sm w-fit group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl sm:rounded-[2rem] border dark:border-white/10 border-black/10 dark:bg-[#0c0c0c]/80 bg-white/80 backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500"></div>
          <div className="p-5 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/5 border mb-3 sm:mb-4">
                <Sparkles className="text-yellow-500 w-3 h-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Access</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-1.5 tracking-tight">Enroll in Training</h1>
              <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-green-500 bg-clip-text text-transparent flex flex-wrap items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span>
                {selectedTitle} - {selectedPrice}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3.5 sm:space-y-5">
              <div className="group/input">
                <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-indigo-500">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-indigo-500 sm:w-[18px] sm:h-[18px]" />
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full box-border dark:bg-black/40 bg-white/5 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              <div className="group/input">
                <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-indigo-500">Mobile Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-indigo-500 sm:w-[18px] sm:h-[18px]" />
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full box-border dark:bg-black/40 bg-white/5 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="group/input">
                <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-indigo-500">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-indigo-500 sm:w-[18px] sm:h-[18px]" />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full box-border dark:bg-black/40 bg-white/5 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 sm:mt-6 shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-[14px] sm:text-[15px] text-white font-black tracking-wide py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 size={18} className="animate-spin sm:w-5 sm:h-5" /> <span>Processing...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Complete Payment</span> <ArrowLeft size={14} className="rotate-180 sm:w-4 sm:h-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Secure Checkout Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 dark:text-slate-500 text-slate-600 text-xs font-semibold uppercase tracking-widest">
          <ShieldCheck size={16} className="text-[#25D366]" />
          100% Secured by Razorpay
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(checkoutClientPath, checkoutClientCode);
console.log("Updated checkout client");

const successClientCode = `"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { pixelTrackCustom } from '@/src/utils/pixel';

export default function TrainingSuccessClient({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const router = useRouter();
  const paymentId = searchParams.id || 'N/A';
  const name = searchParams.name || 'N/A';
  const phone = searchParams.phone || 'N/A';
  const email = searchParams.email || 'N/A';
  const type = searchParams.type || 'training_basic';

  let messageText = '';
  let courseOrServiceName = '';

  if (type === 'training_basic') {
    courseOrServiceName = 'Basic Mushroom Training Program (₹299)';
    messageText = \`Hello Organic Mushrooms Farm Team,

✅ Payment Successful
Name: \${name}
Mobile: \${phone}
Email: \${email}
Payment ID: \${paymentId}

I have successfully enrolled in the Basic Mushroom Training Program (₹299).

Please share:
• Training access details
• Learning materials/PDF notes
• Training schedule
• WhatsApp support group link

I am excited to start my mushroom farming journey.
Thank you.\`;
  } else if (type === 'training_advanced') {
    courseOrServiceName = 'Advance Mushroom Cultivation Training Program (₹699)';
    messageText = \`Hello Organic Mushrooms Farm Team,

✅ Payment Successful
Name: \${name}
Mobile: \${phone}
Email: \${email}
Payment ID: \${paymentId}

I have successfully enrolled in the Advance Mushroom Cultivation Training Program (₹699).

Please share:
• Complete course access
• Advanced cultivation modules
• Business & marketing guidance
• Training materials and resources
• Certificate details
• WhatsApp support group link

I am excited to learn advanced mushroom farming techniques and build a successful mushroom business.
Thank you.\`;
  } else {
    courseOrServiceName = 'Mushroom Cultivation Training';
    messageText = \`Hello Organic Mushrooms Farm Team,
✅ Payment Successful
Name: \${name}
Mobile: \${phone}
Email: \${email}
Payment ID: \${paymentId}
I have successfully completed my payment. Please share my enrollment and training details.
Thank you.\`;
  }

  const whatsappUrl = \`https://wa.me/919203544140?text=\${encodeURIComponent(messageText)}\`;

  useEffect(() => {
    pixelTrackCustom('PaymentSuccess_Viewed', { 
      payment_id: paymentId,
      name,
      phone,
      email,
      course_type: type,
      course_name: courseOrServiceName
    });

    if (name !== 'N/A' || paymentId !== 'N/A') {
      const timer = setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [paymentId, name, phone, email, type, whatsappUrl, courseOrServiceName]);

  return (
    <div className="relative pt-24 pb-32 md:pt-32 lg:pb-0 overflow-hidden min-h-screen selection:bg-green-500/30 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 1, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 dark:bg-black/40 backdrop-blur-lg p-5 md:p-8 rounded-2xl md:rounded-[2rem] border dark:border-green-500/20 border-green-500/20 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-green-500/20 blur-[80px] pointer-events-none rounded-full"></div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] relative z-10"
          >
            <CheckCircle size={32} className="md:w-10 md:h-10" />
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          </motion.div>
          
          <h1 className="text-2xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight mb-2 md:mb-3 relative z-10">
            Payment Successful 🎉
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-1 font-medium">Thank you for joining our program</p>
          <p className="text-emerald-500 dark:text-emerald-400 text-xs md:text-sm mb-5 font-bold uppercase tracking-wider">{courseOrServiceName}</p>
          
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 md:p-6 mb-5 text-center relative z-10">
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-3">
              We are automatically redirecting you to WhatsApp to receive your training/joining details instantly.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] text-green-600 dark:text-green-400 font-bold animate-pulse">Redirecting to WhatsApp chat...</span>
            </div>
            <a href={whatsappUrl}
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-white font-bold rounded-xl hover:scale-105 transition-transform text-sm w-full">
                <MessageCircle size={18} /> Chat with us on WhatsApp
            </a>
            <p className="text-[11px] mt-4 text-slate-400 font-medium leading-relaxed">
              If not redirected automatically, click the button above to share details and start your journey.
            </p>
          </div>
          
          <button 
             onClick={() => router.push("/")}
             className="inline-flex items-center justify-center w-full px-4 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-all text-xs md:text-sm mt-2 relative z-10"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(successClientPath, successClientCode);
console.log("Updated success client");


const cancelClientCode = `"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw, Clock, Gift, Check, HeadphonesIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { pixelTrackCustom } from '@/src/utils/pixel';

export default function TrainingCancelClient({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const router = useRouter();
  const type = searchParams.type === "training_advanced" ? "training_advanced" : "training_basic";
  const isAdvancedTraining = type === "training_advanced";
  const isBasicTraining = type === "training_basic";

  useEffect(() => {
    pixelTrackCustom('PaymentCancel_Viewed', { course_type: type });
  }, [type]);

  const handleRetry = () => {
    router.push(\`/training-checkout?type=\${isAdvancedTraining ? 'advanced' : 'basic'}\`);
  };

  return (
    <div className="relative pt-24 pb-32 md:pt-32 lg:pb-0 overflow-hidden min-h-screen flex items-center justify-center bg-transparent z-[99]">
      <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-rose-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <div className="w-full max-w-lg mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 dark:bg-[#0c0c0c]/80 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border dark:border-white/10 border-black/10 shadow-2xl relative overflow-hidden text-center"
        >
          {isAdvancedTraining ? (
            <div>
              <motion.div 
                initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20"
              >
                <AlertCircle size={32} />
              </motion.div>
              <h2 className="text-2xl font-black dark:text-white text-slate-900 mb-1 tracking-tight">Advanced Registration Incomplete!</h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-500 mb-4">
                <Clock size={12} className="animate-pulse" /> Secure Spot (₹699 Only)
              </div>
              <p className="dark:text-slate-400 text-slate-500 text-sm mb-6 leading-relaxed">
                Your payment for the <strong>Advanced Commercial Cultivation Training</strong> was not completed.
              </p>
              
              <div className="text-left dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-4 sm:p-5 mb-6">
                <h3 className="text-xs font-bold dark:text-white text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Gift size={14} className="text-purple-500" /> What's Included in ₹699:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>All 4 Species</strong>: Button, Oyster, Milky, Cordyceps.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Commercial AC Setup</strong>: HVAC, Insulated panels, Layouts.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Bank DPR & Subsidy</strong>: Complete project report guide.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Business & Marketing</strong>: Selling to B2B, packaging, FSSAI.</span></li>
                </ul>
              </div>
              
              <div className="flex flex-col gap-3">
                <button onClick={handleRetry} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] text-white font-bold py-3.5 px-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95">
                  <RefreshCw size={18} /> Pay ₹699 & Register Again
                </button>
                <button onClick={() => router.push('/training')} className="w-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 dark:text-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm transition-all">
                  Back to Training Options
                </button>
              </div>
            </div>
          ) : isBasicTraining ? (
            <div>
              <motion.div 
                initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20"
              >
                <AlertCircle size={32} />
              </motion.div>
              <h2 className="text-2xl font-black dark:text-white text-slate-900 mb-1 tracking-tight">Basic Registration Incomplete!</h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-500 mb-4">
                <Clock size={12} className="animate-pulse" /> Complete Checkout (₹299 Only)
              </div>
              <p className="dark:text-slate-400 text-slate-500 text-sm mb-6 leading-relaxed">
                Your payment for the <strong>Basic Mushroom Cultivation Training</strong> was not completed.
              </p>
              
              <div className="text-left dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-4 sm:p-5 mb-6">
                <h3 className="text-xs font-bold dark:text-white text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Gift size={14} className="text-blue-500" /> What's Included in ₹299:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Oyster & Button Focus</strong>: Simple, guided step-by-step growing manual.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Home scale setup</strong>: Easy setups in backyards or tiny rooms.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Substrate boiling & Prep</strong>: sterilization techniques.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Spawning, Bagging & Care</strong>: Packing bags without contamination.</span></li>
                </ul>
              </div>
              
              <div className="flex flex-col gap-3">
                <button onClick={handleRetry} className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-white font-bold py-3.5 px-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95">
                  <RefreshCw size={18} /> Pay ₹299 & Register Again
                </button>
                <button onClick={() => router.push('/training')} className="w-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 dark:text-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm transition-all">
                  Back to Training Options
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 mb-3 tracking-tight">Payment Cancelled</h2>
              <button onClick={handleRetry} className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 text-white font-bold py-4 rounded-xl">
                Retry Payment
              </button>
            </div>
          )}

          <div className="pt-6 mt-6 border-t dark:border-white/10 border-black/5">
             <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-2">
               <HeadphonesIcon size={16} className="text-indigo-400" /> Need Help? Contact Support
             </h3>
             <a href="https://wa.me/919203544140?text=Hi,%20I%20am%20facing%20some%20issues%20with%20an%20online%20payment." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full dark:bg-white/5 bg-black/5 dark:text-white text-slate-900 text-sm font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                Contact Support
             </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(cancelClientPath, cancelClientCode);
console.log("Updated cancel client");

// Update server pages to use the new clients
const successPageCode = `import { Metadata } from "next";
import TrainingSuccessClient from "./TrainingSuccessClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingSuccessPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return <TrainingSuccessClient searchParams={searchParams} />;
}
`;
fs.writeFileSync(successPagePath, successPageCode);

const cancelPageCode = `import { Metadata } from "next";
import TrainingCancelClient from "./TrainingCancelClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingCancelPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return <TrainingCancelClient searchParams={searchParams} />;
}
`;
fs.writeFileSync(cancelPagePath, cancelPageCode);

