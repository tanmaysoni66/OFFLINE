import { Metadata } from "next";
import UsaSuccessAdvancedClient from "./UsaSuccessAdvancedClient";

export const metadata: Metadata = {
  title: "Payment Successful - Advanced Plan",
  description: "Payment successful.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdvancedSuccessPage() {
  return <UsaSuccessAdvancedClient />;
}
