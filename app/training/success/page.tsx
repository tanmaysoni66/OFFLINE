import { Suspense } from "react";
import { Metadata } from "next";
import TrainingSuccessClient from "./TrainingSuccessClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TrainingSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrainingSuccessClient />
    </Suspense>
  );
}
