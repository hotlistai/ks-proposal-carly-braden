import type { Metadata } from "next";
import { CarlyBradenProposalPage } from "@/components/knox/carly-braden-proposal-page";

export const metadata: Metadata = {
  title: "Knox Signature - Carly & Braden Proposal",
  description:
    "A Knox Signature wedding proposal for Carly and Braden covering cocktail hour, reception, planning, and ceremony coverage.",
  openGraph: {
    title: "Knox Signature - Carly & Braden Proposal",
    description: "Cocktail hour and reception atmosphere designed for Carly and Braden.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature - Carly & Braden Proposal",
    description: "Cocktail hour and reception atmosphere designed for Carly and Braden.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return (
    <main>
      <CarlyBradenProposalPage />
    </main>
  );
}
