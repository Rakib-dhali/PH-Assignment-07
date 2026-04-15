import { Friends, RecentInteraction } from "@/lib/types";
import Image from "next/image";
import { getFriends } from "@/lib/friends";
import {
  BellOff,
  Archive,
  Trash2,
} from "lucide-react";
import { Metadata } from "next";
import CheckInButtons from "@/components/Buttons";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Friend Details - KeenKeeper",
  description: "Detailed view of your friend and interactions",
};

export default async function FriendDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const friends = await getFriends();
  const friend: Friends = friends.find((f: Friends) => f.id.toString() === id);

  if(!friend) {
    notFound();
  }
  const {
    name,
    picture,
    status,
    tags,
    days_since_contact,
    goal,
    bio,
    next_due_date,
    email,
  } = friend;

  const formattedDate = new Date(next_due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const recentInteractions: RecentInteraction[] = [
    { type: "Text", note: "Asked for career advice", date: "Jan 28, 2026" },
    {
      type: "Meetup",
      note: "Industry conference meetup",
      date: "Jan 28, 2026",
    },
    { type: "Video", note: "Asked for career advice", date: "Jan 28, 2026" },
    { type: "Text", note: "Asked for career advice", date: "Jan 28, 2026" },
  ];

  return (
    <main className="min-h-screen bg-[#F0F4F3] p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center gap-2 shadow-sm">
            <Image
              src={picture}
              alt={name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <h1 className="text-xl font-semibold text-[#1F2937] mt-2">{name}</h1>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full text-white  ${status === "overdue" ? "bg-[#EF4444]" : status === "almost-due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <div className="flex gap-2 flex-wrap justify-center">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-[#CBFADB] text-[#244D3F] text-xs font-medium px-2 py-1 rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm inter text-gray-400 italic">&quot;{bio}&quot;</p>
            <p className="text-sm text-gray-400">Preferred: {email}</p>
          </div>
          <div className="text-center font-medium  flex flex-col gap-4">
            <button className="w-full bg-white rounded-xl shadow-sm flex items-center justify-center gap-3 px-5 py-4 text-sm text-[#1F2937] hover:bg-gray-50 transition-colors">
              <BellOff size={16} className="text-gray-500" /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white rounded-xl shadow-sm flex items-center justify-center gap-3 px-5 py-4 text-sm text-[#1F2937] hover:bg-gray-50 transition-colors">
              <Archive size={16} className="text-gray-500" /> Archive
            </button>
            <button className="w-full bg-white rounded-xl shadow-sm flex items-center justify-center gap-3 px-5 py-4 text-sm text-red-500 hover:bg-red-50 transition-colors">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: days_since_contact, label: "Days Since Contact" },
              { value: goal, label: "Goal (Days)" },
              { value: formattedDate, label: "Next Due" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 text-center shadow-sm"
              >
                <p className="text-2xl font-bold text-[#1F2937]">{value}</p>
                <p className="text-sm text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#1F2937] mb-1">
                Relationship Goal
              </h2>
              <p className="text-sm text-gray-500">
                Connect every <strong>{goal} days</strong>
              </p>
            </div>
            <button className="text-sm border border-gray-200 px-4 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
              Edit
            </button>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-[#1F2937] mb-4">
              Quick Check-In
            </h2>
            <CheckInButtons friendName={name} />
          </div>
        </div>
      </div>
    </main>
  );
}
