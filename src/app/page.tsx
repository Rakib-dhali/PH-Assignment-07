import { PlusIcon } from "lucide-react";
import { SummeryCard, Friends } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { getFriends } from "@/lib/friends";

export default async function Home() {
  const summeryCards: SummeryCard[] = [
    { counter: 10, label: "Total Friends" },
    { counter: 3, label: "On Track" },
    { counter: 6, label: "Need Attention" },
    { counter: 12, label: "Interactions This Month" },
  ];

  const friends: Friends[] = await getFriends();

  return (
    <main className="w-full max-w-277.5 mx-auto my-5 md:my-20 bg-[#F8FAFC]">
      <section className="text-center p-5 flex-col flex gap-4 items-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-5">
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
        <hr className="border-[#E9E9E9] my-5 md:my-10 p-5" />
        <div className="cards p-5">
          <h2 className="font-semibold text-2xl text-[#1F2937] my-5">
            Your Friends
          </h2>
          <div className="grid grid-cols-1 sm:grid-col-span-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {friends.map((friend) => {
              const { id, name, picture, days_since_contact, status, tags } =
                friend;
              return (
                <Link
                  href={`${id.toString()}`}
                  key={id}
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
                >
                  <Image
                    src={picture}
                    alt={name}
                    width={80}
                    height={80}
                    className="friend-picture rounded-full"
                  />
                  <h3 className="font-semibold text-[#1F2937]">{name}</h3>
                  <p>{days_since_contact}d ago</p>
                  <div className=" flex gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#CBFADB] text-[#244D3F] text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    className={` ${status === "overdue" ? "bg-[#EF4444]" : status === "almost-due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"} text-white font-medium py-1 px-3 rounded-full text-sm`}
                  >
                    {status}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
