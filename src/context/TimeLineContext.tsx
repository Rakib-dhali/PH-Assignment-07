"use client";

import { createContext, useContext, useState } from "react";

type Entry = {
  friendName: string;
  type: string;
  date: string;
};

type TimelineContextType = {
  timeline: Entry[];
  addEntry: (entry: Entry) => void;
};

const TimelineContext = createContext<TimelineContextType | null>(null);

export function TimelineProvider({ children }: { children: React.ReactNode }) {
  const [timeline, setTimeline] = useState<Entry[]>([]);

  const addEntry = (entry: Entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useTimeline must be used inside TimelineProvider");
  return ctx;
}