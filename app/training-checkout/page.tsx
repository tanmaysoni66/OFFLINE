import { Metadata } from "next";
import TrainingCheckoutClient from "./TrainingCheckoutClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingCheckoutPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const type = (searchParams.type as "basic" | "advanced" | "offline-basic" | "offline-advanced") || "basic";
  return <TrainingCheckoutClient type={type} />;
}
