import { Metadata } from "next";
import TrainingSuccessClient from "./TrainingSuccessClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function TrainingSuccessPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  return <TrainingSuccessClient searchParams={params} />;
}
