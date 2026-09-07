import { Metadata } from "next";
import TrainingCheckoutClient from "./TrainingCheckoutClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function TrainingCheckoutPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  const type = (params.type as "basic" | "advanced" | "offline-basic" | "offline-advanced") || "basic";
  return <TrainingCheckoutClient type={type} />;
}
