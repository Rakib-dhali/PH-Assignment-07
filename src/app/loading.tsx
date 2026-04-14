import React from "react";

const Loading = () => {
  return (
    <main className="w-full max-w-277.5 mx-auto my-5 md:my-20 bg-white">
      {/* Header */}
      <section className="text-center p-5 flex flex-col gap-4 items-center">
        <div className="h-10 w-1/2 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-6 w-3/4 bg-gray-300 animate-pulse rounded"></div>

        <button className="px-4 mt-4 py-3 bg-gray-300 animate-pulse rounded-sm flex items-center gap-2">
          <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
          <div className="h-5 w-16 bg-gray-400 rounded"></div>
        </button>
      </section>

      {/* Stats */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gray-300 animate-pulse rounded-lg p-4 md:p-8"
            >
              <div className="h-10 w-1/2 bg-gray-400 rounded"></div>
              <div className="h-6 w-3/4 bg-gray-400 rounded mt-2"></div>
            </div>
          ))}
        </div>

        <hr className="border-gray-300 my-5 md:my-10" />

        {/* Cards */}
        <div className="p-5">
          <div className="h-8 w-1/2 bg-gray-300 animate-pulse rounded mb-5"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-300 animate-pulse"
              >
                <div className="h-20 w-20 bg-gray-400 rounded-full"></div>
                <div className="h-6 w-3/4 bg-gray-400 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loading;