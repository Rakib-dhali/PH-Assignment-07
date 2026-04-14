import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "View your interactions with friends in a chronological timeline.",
};

export default function TimelineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
