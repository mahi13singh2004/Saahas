import React, { useState } from "react";
import dev from "../temping/dev.jpg";
import mahi from "../temping/mahi.jpg";
import piy from "../temping/piy.jpg";
import maynk from "../temping/maynk.jpg";

const TeamMember = ({
  imgSrc,
  name,
  role,
  description,
  github,
  twitter,
  instagram,
  linkend,
}) => {
  return (
    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
      <div className="rounded overflow-hidden shadow-md bg-blue bg-transparent">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img
              src={imgSrc}
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="px-6 mt-16 bg-transparent">
          <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
            {name}
          </h1>
          <p className="text-gray-800 dark:text-white text-sm text-center">
            {role}
          </p>
          <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
            {description}
          </p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a
              href={github}
              className="mx-5 bg-black-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                alt="github"
              />
            </a>
            {twitter && (
              <a
                href={twitter}
                className="mx-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                  alt="twitter"
                />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                className="mx-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                  alt="instagram"
                />
              </a>
            )}
            {linkend && (
              <a
                href={linkend}
                className="mx-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://th.bing.com/th?id=ODLS.fc619bab-a786-4b75-8669-6881202d98da&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
                  alt="linkedin"
                  className="h-6 w-6"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = [
    {
      imgSrc: mahi,
      name: "Mahi Singh",
      role: "Mern Stack Developer",
      description: "Expert in Full Stack Development, Competitive Programming",
      github: "https://github.com/mahi13singh2004",
      linkend: "https://www.linkedin.com/in/mahi-singh-817825282/",
    },
    {
      imgSrc: dev,
      name: "Dev Lohani",
      role: "Mern Stack Developer",
      description: "Expert in Frontend Development, AIML, Machine Learning",
      github: "https://github.com/devlohani99",
      linkend: "https://www.linkedin.com/in/devlohani/",
    },
    {
      imgSrc: maynk,
      name: "Mayank Dundiyal",
      role: "App Developer",
      description: "Expert in App Development & Android studio",
      github: "https://github.com/Dmayank297",
      linkend: "https://www.linkedin.com/in/mayank-dhaundiyal-759b12282/",
    },
    {
      imgSrc: piy,
      name: "Piyush Mishra",
      role: "App Developer",
      description: "Expert in App Development & Android studio",
      github: "https://github.com/Piyush-Kumar-Mishra",
      linkend: "https://www.linkedin.com/in/piyush-mishra-77a442212/",
    },
  ];

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="container flex justify-center mx-auto pt-16 bg-gradient-to-r from-blue-300 to-pink-300">
        <div>
          <h1 className="xl:text-4xl text-6xl text-center text-gray-900 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto ">
            Team
          </h1>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-blue-300 to-pink-300 pt-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <TeamMember {...teamMembers[currentIndex]} />
          </div>
          <div className="flex justify-center pt-6 mb-9 gap-5">
            <button
              onClick={prevMember}
              className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4 hover:bg-gray-700"
            >
              Prev
            </button>
            <button
              onClick={nextMember}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
