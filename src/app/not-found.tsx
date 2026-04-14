"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center text-sm h-100">
            <p className="font-medium text-lg text-[#1F2937]">404 Error</p>
            <h2 className="md:text-6xl text-4xl font-semibold text-[#1F2937]">Page Not Found</h2>
            <p className="text-base mt-4 text-[#64748B]">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="flex items-center gap-4 mt-6">
                <button onClick={() => router.push("/")} className="bg-[#1F2937] hover:bg-[#374151] cursor-pointer px-7 py-2.5 text-white rounded active:scale-95 transition-all">
                    Go back home
                </button>
            </div>
        </div>
    );
};