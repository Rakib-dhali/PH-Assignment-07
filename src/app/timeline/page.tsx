"use client";

import { useTimeline } from "@/context/TimeLineContext";
import { Phone, MessageSquare, Video } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Call: <Phone size={16} />,
  Text: <MessageSquare size={16} />,
  Video: <Video size={16} />,
};

export default function TimelinePage() {
  const { timeline } = useTimeline();

  return (
    <main className="min-h-screen bg-[#F0F4F3] p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-[#1F2937] mb-6">Timeline</h1>

        {timeline.length === 0 ? (
          <p className="text-gray-400 text-sm">No interactions logged yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {timeline.map((entry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
              >
                <div className="p-2 bg-gray-100 rounded-lg">
                  {iconMap[entry.type]}
                </div>
                <div>
                    <p className="text-sm font-medium text-[#64748B]"><span className="font-medium text-xl text-[#244D3F]">{entry.type}</span> with {entry.friendName}
                    </p>
                    <p className="text-xs text-gray-400">{entry.date}</p>

                </div>
                
               
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}