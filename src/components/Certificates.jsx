import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import advancereact from "../assets/images/advance-react.jpeg"
import frontend from "../assets/images/frontend.jpeg"
import recatbasic from "../assets/images/reactbasic.jpeg"
const Certificates = () => {
  const certificates = [
    {
      title: "Advanced React-Meta",
      description:
        "Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior,Interact with a remote server and fetch and post data via an API.",
      image: advancereact,
      imageAlt: "Advanced React",
      link: "https://coursera.org/share/103af6011619302b811d65fbe432e65f",
    },
    {
      title: "Introduction to Front-End Development-Meta",
      description:
        "Distinguish between front-end, back-end, and full-stack developers,Create and style a webpage with HTML and CSS,The benefits of working with UI frameworks.",
      image: frontend,
      imageAlt: "Introduction to Front-End Development-Meta",
      link: "https://coursera.org/share/ac585d126a231a90e65f01432f171686",
    },
    {
      title: "React Basics-Meta",
      description:
        "Use reusable components to render views where data changes over time,Use props to pass data between components. Create dynamic and interactive web pages and apps.",
      image: recatbasic,
      imageAlt: "React Basics",
      link: "https://coursera.org/share/b8a098fc257a354eefc269dce3b51c92",
    },
    {
      title: "Version Control-Meta",
      description:
        "Implement Version Control systems,Navigate and configure using the command line, Use a GitHub repository. Create a GitHub repository,Manage code revisions",
      image: recatbasic,
      imageAlt: "Version Control",
      link: "https://coursera.org/share/e4ed352fdab15cd82a6facedbe0e4290",
    },
  ];

  return (
    <div id="certificates">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Certificates</h1>

      <div className="flex flex-wrap justify-between gap-y-5">
        {certificates.map((value, index) => {
          return (
            <div
              className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer"
              key={index}
            >
              <img className="w-full" src={value.image} alt={value.imageAlt} />
              <div className="px-4">
                <div className="">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-black flex items-center gap-2">
                    {value.title}{" "}
                    <a
                      href={value.link}
                      className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110"
                      target="_blank"
                      title="Certificate Verification"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </h1>
                  <p className="text-gray-700 text-base">{value.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
