import Image from "next/image";

function RealTime() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl mt-8 text-start font-bold text-gray-900 leading-tight">
            Explore the HR Management
            <br />
            Experience in Real Time
          </h2>
        </div>
        <div className="bg-white shadow-lg rounded-4xl mt-16 w-full h-150"></div>
        <div className="px-6 pb-6 flex items-center mt-12 justify-center flex-row gap-3">
          <button className="bg-black text-white text-lg px-16 py-2.5 rounded-2xl shadow-lg font-medium">
            Video
          </button>
          <button className=" text-black text-lg px-5 py-2.5 rounded-xl font-medium">
            Try a demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default RealTime;
