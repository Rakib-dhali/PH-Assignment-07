"use client";

import { Phone, MessageSquare, Video } from "lucide-react";
import { useTimeline } from "@/context/TimeLineContext";
import { toast } from "react-toastify";

export default function CheckInButtons({ friendName }: { friendName: string }) {
  const { addEntry } = useTimeline();

  const handleClick = (type: string) => {
    addEntry({
      friendName,
      type,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    
    toast.success(`${type} with ${friendName}!`);
}

  return (
    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: Phone, label: "Call" },
        { icon: MessageSquare, label: "Text" },
        { icon: Video, label: "Video" },
      ].map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className="flex flex-col items-center gap-2 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm text-[#1F2937]"
        >
          <Icon size={22} />
          {label}
        </button>
      ))}
    </div>
  );
}