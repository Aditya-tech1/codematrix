'use client';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const items = [
    { title: 'Week 1', content: 'Basic Introduction  and Installation' },
    { title: 'Week 2', content: 'What is Demo Topic? How Its work and why do we need this' },
    { title: 'Week 3', content: 'Important Topics' },
    { title: 'Week 4', content: 'Content for Week 4' },
    { title: 'Week 5', content: 'Content for Week 5' },
    
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header whatpage="dashboard"/>
      <div className="container mx-auto w-full md:w-1/2  py-10 pt-24">
        <div className="relative wrap overflow-hidden h-full gap-4">
          <div className="border-2 absolute h-full border-blue-500 left-1/2 transform -translate-x-1/2"></div>

          {items.map((item, index) => {
            const position = index % 2 === 0 ? 'left' : 'right';

            return (
              <div
                key={index}
                className={`mb-8 flex  justify-${position === 'left' ? 'start' : 'end'
                  } w-full relative `}
              >
                {/* Timeline Item */}
                <div className="w-[30rem]">
                  <div className="p-4 bg-gray-800 rounded-lg shadow">
                    <h3 className="font-bold text-lg mb-2 text-gray-200">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-6">{item.content}</p>
                    <Link href="/course" className="mt-4 px-4 py-2 bg-blue-500 text-gray-200 rounded hover:bg-blue-600 transition-colors">
                      Start Learning
                    </Link>
                  </div>
                </div>

                {/* Timeline Dot */}

              </div>
            );
          })}
        </div>
      <div className=' px-4 py-2 m-auto w-fit bg-blue-600 text-white rounded-full'>Congratulations, You Succesfully Completed Your Path</div>
      </div>
    </div>
  );
};

export default Page;
