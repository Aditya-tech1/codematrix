import Image from 'next/image';
import scheduleImage from '@assets/schedule.png';

export default function Scheduler() {
  return (
    <div className="w-full h-screen bg-blue-50 flex justify-center items-center">
      <div className="w-1/3 bg-white shadow-md rounded-md m-10">
        <div className="p-5">
          {/* Image Section */}
          <div>
            <Image
              src={scheduleImage}
              alt="alert-icon"
              width={80}
              height={80}
              className="h-20"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h1 className="text-3xl font-bold pt-2">Schedule time to learn</h1>
            <p className="pb-5 text-gray-800">
              Learning a little each day adds up. Research shows that students who make learning a habit are more likely
              to retain information and reach their goals. Set time aside to learn and get reminders using your learning
              event scheduler.
            </p>
          </div>

          {/* Button Section */}
          <div className="flex m-2 justify-end items-end">
            <div className="p-2">
              <p className="font-semibold text-black cursor-pointer">Remind me later</p>
            </div>
            <button className="bg-[#05B0FC] text-white font-semibold p-2 rounded hover:bg-blue-600">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
