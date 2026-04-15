export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F0F4F3] p-6 animate-pulse">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm">
            <div className="w-20 h-20 bg-gray-200 rounded-full" />
            <div className="h-5 w-32 bg-gray-200 rounded" />
            <div className="h-4 w-20 bg-gray-200 rounded-full" />
            <div className="flex gap-2 flex-wrap justify-center mt-2">
              <div className="h-5 w-12 bg-gray-200 rounded-full" />
              <div className="h-5 w-14 bg-gray-200 rounded-full" />
              <div className="h-5 w-10 bg-gray-200 rounded-full" />
            </div>
            <div className="h-3 w-40 bg-gray-200 rounded mt-2" />
            <div className="h-3 w-32 bg-gray-200 rounded" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-12 bg-gray-200 rounded-xl" />
            <div className="h-12 bg-gray-200 rounded-xl" />
            <div className="h-12 bg-gray-200 rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 text-center shadow-sm"
              >
                <div className="h-6 w-12 mx-auto bg-gray-200 rounded" />
                <div className="h-3 w-20 mx-auto bg-gray-200 rounded mt-2" />
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
              <div className="h-3 w-40 bg-gray-200 rounded" />
            </div>
            <div className="h-8 w-16 bg-gray-200 rounded" />
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="h-4 w-32 bg-gray-200 rounded mb-4" />
            <div className="flex gap-3">
              <div className="h-10 w-24 bg-gray-200 rounded-md" />
              <div className="h-10 w-24 bg-gray-200 rounded-md" />
              <div className="h-10 w-24 bg-gray-200 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
