import { PlusIcon } from "lucide-react";
import { SummeryCard, Friends } from "@/types";

async function getFriends() {
  const res = await fetch("/friends.json", {
    cache: "no-store",
  });
  return res.json();
}

export default function Home() {
  const summeryCards: SummeryCard[] = [
    { counter: 10, label: "Total Friends" },
    { counter: 3, label: "On Track" },
    { counter: 6, label: "Need Attention" },
    { counter: 12, label: "Interactions This Month" },
  ];

  const friends: Promise<Friends[]> = getFriends();
  console.log(friends);

  return (
    <main className="w-full max-w-277.5 mx-auto my-20 bg-[#F8FAFC]">
      <section className="text-center flex-col flex gap-4 items-center">
        <h1 className="text-4xl font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the
        </p>
        <button className="px-4 mt-4 cursor-pointer py-3 text-white bg-[#244D3F] hover:bg-[#1e4035] flex items-center justify-center gap-0.5 rounded-sm">
          <PlusIcon /> Add a Friend
        </button>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {summeryCards.map(({ counter, label }) => (
            <div
              key={label}
              className="bg-white rounded-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.08)] text-center p-4 md:p-8"
            >
              <h2 className="text-3xl font-bold text-[#1F2937]">{counter}</h2>
              <p className="text-[#64748B] mt-2">{label}</p>
            </div>
          ))}
        </div>
        <div className="cards">
          {/* Render friend cards here */}
          <h2>Your Friends</h2>
          <div>{/* Example friend card */}</div>
        </div>
      </section>
    </main>
  );
}
