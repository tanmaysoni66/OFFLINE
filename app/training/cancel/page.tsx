import { Metadata } from "next";
import TrainingCancelClient from "./TrainingCancelClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingCancelPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return <TrainingCancelClient searchParams={searchParams} />;
}
