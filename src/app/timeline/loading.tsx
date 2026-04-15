export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F0F4F3] p-6 animate-pulse">
      <div className="max-w-2xl mx-auto">
        <div className="h-8 md:h-12 w-40 bg-gray-200 rounded mb-6" />
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 h-10 bg-gray-200 rounded-xl" />
          <div className="w-full md:w-40 h-10 bg-gray-200 rounded-xl" />
        </div>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-lg" />

              <div className="flex flex-col gap-2 w-full">
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
                <div className="h-3 w-1/3 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
