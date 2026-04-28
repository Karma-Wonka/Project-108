import { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
};

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return <span className="eyebrow block mb-4">{children}</span>;
}
