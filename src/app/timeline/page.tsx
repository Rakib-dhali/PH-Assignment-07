"use client";

import { useTimeline } from "@/context/TimeLineContext";
import { Phone, MessageSquare, Video } from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Call: <Phone size={16} />,
  Text: <MessageSquare size={16} />,
  Video: <Video size={16} />,
};

export default function TimelinePage() {
  const { timeline } = useTimeline();
  const [typeFilter, setTypeFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = timeline.filter((entry) => {
    const matchesType = typeFilter === "All" || entry.type === typeFilter;
    const matchesName = entry.friendName.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesName;
  });

  return (
    <main className="min-h-screen bg-[#F0F4F3] p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-[#1F2937] mb-6">Timeline</h1>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by friend name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-sm text-[#1F2937] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]/30"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-[#1F2937] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]/30"
          >
            <option value="All">All Types</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-sm">No interactions found.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((entry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
              >
                <div className="p-2 bg-gray-100 rounded-lg">
                  {iconMap[entry.type]}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#64748B]">
                    <span className="font-medium text-xl text-[#244D3F]">{entry.type}</span>{" "}
                    with {entry.friendName}
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