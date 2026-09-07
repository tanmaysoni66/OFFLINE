import { Suspense } from "react";
import { Metadata } from "next";
import TrainingCancelClient from "./TrainingCancelClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingCancelPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrainingCancelClient />
    </Suspense>
  );
}
