import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Organic Mushrooms Farm Gallery | Project Photos & Setup",
  description:
    "View photos of our commercial button mushroom farm in Katangi Road, Jabalpur, training sessions, and successful turnkey farming project setups across India.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
