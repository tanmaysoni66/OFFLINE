import { Metadata } from "next";
import UsaSuccessBasicClient from "./UsaSuccessBasicClient";

export const metadata: Metadata = {
  title: "Payment Successful - Basic Plan",
  description: "Payment successful.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BasicSuccessPage() {
  return <UsaSuccessBasicClient />;
}
