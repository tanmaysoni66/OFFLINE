"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-slate-800/90 border border-slate-700 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3 text-emerald-400">Something went wrong</h2>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            An unexpected application error has occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors cursor-pointer text-sm shadow-md"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
