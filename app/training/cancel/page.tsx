import { Metadata } from "next";
import TrainingCancelClient from "./TrainingCancelClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function TrainingCancelPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  return <TrainingCancelClient searchParams={params} />;
}
