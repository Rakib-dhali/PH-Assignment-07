export default function Loading() {
  return (
    <div className="w-full bg-[#F8FAFC] p-5 md:p-10 animate-pulse">
      <div className="mx-auto max-w-277.5 my-10 md:my-20">
        <div className="h-10 md:h-12 w-80 bg-gray-200 rounded" />
      </div>

      <div className="bg-white rounded-lg mx-auto max-w-277.5 p-10 my-5 md:my-15 drop-shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
        <div className="h-5 w-52 bg-gray-200 rounded mb-8" />

        <div className="flex flex-col items-center justify-center py-10 md:py-20 gap-10">
          <div className="w-52 h-52 md:w-64 md:h-64 bg-gray-200 rounded-full" />

          <div className="flex gap-3">
            <div className="h-6 w-16 bg-gray-200 rounded-full" />
            <div className="h-6 w-16 bg-gray-200 rounded-full" />
            <div className="h-6 w-16 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
