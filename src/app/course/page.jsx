'use client';
import Header from "@/components/Header";
import { useState, useEffect } from "react";
// import courseVideo from "@/assets/video.mp4";


export default function Page() {
  const [sections, setSections] = useState([
    { id: "section1", total: 6, completed: 0 },
    { id: "section2", total: 1, completed: 0 },
    { id: "section3", total: 3, completed: 0 },
  ]);

  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    updateTotalCompletedCount();
  }, [sections]);

  // Function to update completed count
  const updateTotalCompletedCount = () => {
    let totalCompleted = 0;
    sections.forEach((section) => {
      totalCompleted += section.completed;
    });
    setCompletedCount(totalCompleted);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (sectionIndex, checkedCount) => {
    setSections((prevSections) =>
      prevSections.map((section, index) =>
        index === sectionIndex
          ? { ...section, completed: checkedCount }
          : section
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
     <Header whatpage="dashboard"/>
      {/* Video Player Section */}
      <div className="lg:w-3/4 w-full mt-24 p-5 pl-10">
        <div className="w-full">
          <video className="w-full h-[80vh] rounded" controls controlsList="nodownload" disablePictureInPicture  >
            <source src='https://www.w3schools.com/html/mov_bbb.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-2 m-1 space-y-4 mt-6 w-full flex flex-col">
            <h1 className="text-3xl font-bold text-start ">Course Introduction</h1>
            <p className=" mt-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda ipsum velit. Aperiam, officiis explicabo magnam neque nam voluptas architecto dolorem non quisquam iure! Vel, assumenda ipsam? Totam autem libero aliquam corrupti blanditiis repudiandae placeat, a esse itaque alias modi dolorem fugit aut mollitia labore. Veritatis perferendis rem ab numquam dolorem debitis mollitia doloribus asperiores consequatur maiores explicabo excepturi magnam voluptatem vero esse quidem, ipsa ducimus. Earum fuga quod fugit impedit architecto dicta, dolorem nihil, nostrum eius quisquam nesciunt repudiandae doloribus voluptas illum? Delectus dolore soluta a libero sint? Qui tenetur temporibus nisi doloremque laborum quaerat et facere soluta mollitia assumenda vel, odio ea cupiditate ut distinctio atque error hic totam, aperiam consequatur debitis ducimus laboriosam beatae! Qui quos temporibus accusamus, modi fuga deleniti iste dolorum officia delectus? Sed dolore sapiente deserunt, eum eaque vero porro accusamus. Assumenda veniam neque aut enim, explicabo quam incidunt voluptatibus maiores velit dolorum facilis!
            </p>

            <button type="button" class="border text-lg font-medium rounded-lg  px-16 py-3  text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-18 m-auto w-fit">Take Quiz</button>


          </div>
        </div>
      </div>

      {/* Sidebar with sections */}
      <div className="lg:w-1/4 w-full p-4 lg:p-6 h-full absolute right-0 top-24">
        <div className="shadow-lg rounded-lg p-4 bg-gray-800">
          <h1 className="text-lg font-bold">Course Content</h1>
          <div className="mt-4">
            {sections.map((section, index) => (
              <CourseSection
                key={section.id}
                section={section}
                sectionIndex={index}
                onCheckboxChange={handleCheckboxChange}
                isNextDisabled={index > 0 && sections[index - 1].completed !== sections[index - 1].total}
              />
            ))}
          </div>
          <div className="border-t mt-4 pt-4">
            <p className="font-semibold">
              Completed: <span className="text-blue-400">{completedCount}</span> items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseSection({ section, sectionIndex, onCheckboxChange, isNextDisabled }) {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckbox = (e) => {
    const updatedCheckedCount = e.target.checked ? checkedCount + 1 : checkedCount - 1;
    setCheckedCount(updatedCheckedCount);
    onCheckboxChange(sectionIndex, updatedCheckedCount);
  };

  useEffect(() => {
    onCheckboxChange(sectionIndex, checkedCount); // Initialize counts
  }, []);
  const chapters = [
    { title: "Chapter 1", content: "Introduction" },
    { title: "Chapter 2", content: "What is Demo Topic? How Its work and why do we need this" },
    { title: "Chapter 3", content: "Important Topics" },
    { title: "Chapter 4", content: "Content for Week 4" },
    { title: "Chapter 5", content: "Content for Week 5" },
  ];
  return (
    <div className={` mb-4 p-4 rounded-lg shadow-lg ${isNextDisabled ? "opacity-50" : "opacity-100"}`}>
      <h2 className="font-semibold">{`Section ${sectionIndex + 1}: Content`}</h2>
      <p className="text-sm">
        <span>{checkedCount}/{section.total}</span> | Time: {(section.total * 10)}min
      </p>
      <ul className="mt-2 space-y-2">
        {chapters.map((val, index) => (
          <li key={index} className="p-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded"
                onChange={handleCheckbox}
                disabled={isNextDisabled}
              />
              <div>
                <span>{val.title}</span>
                <p className="text-sm text-gray-400">{val.content}</p>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
