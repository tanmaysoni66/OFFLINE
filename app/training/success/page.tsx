import { Metadata } from "next";
import TrainingSuccessClient from "./TrainingSuccessClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingSuccessPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return <TrainingSuccessClient searchParams={searchParams} />;
}
