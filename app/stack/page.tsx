import type { Metadata } from "next";
import { StackPlayground } from "@/components/stack/StackPlayground";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The technologies and capabilities Shivansh Vyas uses to build complete products.",
};

export default function StackPage() {
  return <StackPlayground />;
}
