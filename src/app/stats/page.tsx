"use client";

import PieChart from "@/components/PieChart";
import Dot from "@/components/Dot";
import { useTimeline } from "@/context/TimeLineContext";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";


function Page() {
    const { timeline } = useTimeline();
    const router = useRouter();

    return (
        <div className="w-full bg-[#F8FAFC] p-5 md:p-10" >

            <h1 className="mx-auto max-w-277.5 my-5 md:my-20 mt-10 md:mt20 text-5xl font-bold text-[#1F2937]">Friendship Analytics </h1>
            <div className="bg-white rounded-lg mx-auto max-w-277.5 p-10 my-5 md:my-15 mt-10  drop-shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
            <h2 className="font-medium text-xl text-[#1F2937]">By Interaction Type</h2>
            <div className="flex flex-col items-center justify-center py-10 md:py-20  gap-10 ">
                {
                   timeline.length === 0 ? (
                    <div className="flex flex-col gap-3 items-center justify-center">
                        <h3 className="text-center font-medium text-[#1F2937] mb-2">No data to display</h3>
      <p className="text-sm text-center text-[#64748B] max-w-65 leading-relaxed mb-6">
        Log some interactions to see a breakdown by type — text, call, and video.
      </p>

      <button
        onClick={() => router.push("/timeline")}
        className="flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#1F2937] transition-colors"
      >
        <PlusCircle size={14} />
        Log an interaction
      </button>
                    </div>
                   ) : (<PieChart /> )
                }
                <div className="flex gap-3">
                    <Dot color="#7E35E1" type="Text" />
                    <Dot color="#244D3F" type="Call" />
                    <Dot color="#37A163" type="Video" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Page;