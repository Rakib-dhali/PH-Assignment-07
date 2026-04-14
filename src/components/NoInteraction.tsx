import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NoInteractions() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="w-24 h-24 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center mb-6">
        <MessageSquare size={40} strokeWidth={1.4} className="text-[#94A3B8]" />
      </div>

      <h2 className="text-lg font-medium text-[#1F2937] mb-2">
        No interactions yet
      </h2>
      <p className="text-sm text-[#64748B] max-w-70 leading-relaxed mb-7">
        Your interactions with friends will show up here. Start a call, send a
        text, or log a video chat.
      </p>

      <button
        onClick={() => router.push("/")}
        className="flex cursor-pointer items-center gap-2 text-sm font-medium px-5 py-2 rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#1F2937] transition-colors"
      >
        <span className="text-lg leading-none">+</span>
        Choose a friend to interact with
      </button>
    </div>
  );
}
