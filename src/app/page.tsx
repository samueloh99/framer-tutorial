import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmbPy371rb9rcQgZCpdNx5R98mUinMWcH2yokscz4D1GpG/0.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Cosmic Cowboys",
  description: "A frame telling the story of Cosmic Cowboys",
  openGraph: {
    title: "Cosmic Cowboys",
    description: "A frame telling the story of Cosmic Cowboys",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmbPy371rb9rcQgZCpdNx5R98mUinMWcH2yokscz4D1GpG/0.jpg`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
