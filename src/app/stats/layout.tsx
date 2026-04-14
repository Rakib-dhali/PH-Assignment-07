import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Friendship Analytics",
    description: "Analyze your interactions with friends using charts and graphs.",
};


export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
