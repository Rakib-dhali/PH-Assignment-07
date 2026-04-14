import PieChart from "@/components/PieChart";
import Dot from "@/components/Dot";
import { Metadata } from "next";

const metadata: Metadata = {
    title: "Friendship Analytics",
    description: "Analyze your interactions with friends using charts and graphs.",
};

function Page() {
    return (
        <div className="w-full bg-[#F8FAFC] p-5 md:p-10" >

            <h1 className="mx-auto max-w-277.5 my-5 md:my-20 mt-10 md:mt20 text-5xl font-bold text-[#1F2937]">Friendship Analytics </h1>
            <div className="bg-white rounded-lg mx-auto max-w-277.5 p-10 my-5 md:my-15 mt-10  drop-shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
            <h2 className="font-medium text-xl text-[#1F2937]">By Interaction Type</h2>
            <div className="flex flex-col items-center justify-center py-10 md:py-20  gap-10 ">
                <PieChart />
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