import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import todo from "../assets/images/todolist.png"
import vms from "../assets/images/vmsapp.png"
import manpoer from "../assets/images/manpower.png"
import workpro from "../assets/images/workpro.png"
function Projects() {
  const [visible,setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const projects = [
    {
      id: 1,
      image: todo,
      imageAlt: "Todo App",
      name: "Todo App",
      description: "Simple Website to manage Daily task",
      links: {
        gitHub: "https://github.com/sivasankarp01/Todoapp-React.js",
        hosted: "https://sivasankarp01.github.io/Todoapp-React.js/"
      },
      tags: [
        "html", "css", "javascript", "React.js"
      ]
    },
    {
      id: 5,
      image: manpoer,
      imageAlt: "Man Power",
      name: "Man Power",
      description: "Find and Book Reliable Workers Anytime, Anywhere.Looking for help with daily tasks, home repairs, cleaning, or other services? Our app connects you with skilled and verified workers near you—quickly and easily. Whether it’s a one-time job or ongoing help, we’ve got you covered",
      links: {
        gitHub: "https://github.com/sivasankarp01",
        hosted: "https://github.com/sivasankarp01"
      },
      tags: [
        "Flutter", "dart","BLoC","Firebase","Hive","Secure Storage","FCM"
      ]
    },
    {
      id: 2,
      image: vms,
      imageAlt: "VMS",
      name: "VMS",
      description: "Venue Management System",
      links: {
        gitHub: "https://github.com/sivasankarp01",
        hosted: "https://play.google.com/store/apps/details?id=com.vms.vmsapp"
      },
      tags: [
        "Flutter", "dart", "Hive","Secure Storage"
      ]
    },
    {
      id: 3,
      image: workpro,
      imageAlt: "Workpro",
      name: "Workpro",
      description: "ERP , A complete ERP solution for employee management, including features such as check-in/check-out with geo-lock, payslip downloads, and more.",
      links: {
        gitHub: "https://github.com/sivasankarp01",
        hosted: "https://play.google.com/store/apps/details?id=com.redruby.zigmaworkpro"
      },
      tags: [
        "Flutter", "dart","Firebase", "Hive","Secure Storage","FCM"
      ]
    },
   
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  return (
    <div className="pb-5 h-auto my-20" id="projects">

      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {projects.map(cards => {
          return (
            <div className="max-md:w-[49%] w-[49%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" key={cards.id} onMouseOver={() => handleHover(cards.id)} onMouseLeave={() => setVisible(0)}>
              <img className="w-full h-full object-contain" src={cards.image} alt={cards.imageAlt} />
              <div className={`${visible === cards.id || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
              <div className="px-4">
                <div className="flex items-center gap-5">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  {cards.name}
                  </h1>
                  <a href={cards.links.gitHub} className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
                    <FaGithub /> 
                  </a>
                  <a href={cards.links.hosted} className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
                    <FaExternalLinkAlt /> 
                  </a>
                </div>
                  <p className="text-gray-200 max-md:text-gray-600 text-base">
                    {cards.description}
                  </p>
              </div>

              <div className="px-4 pt-4 pb-2">
                {
                 cards.tags.map((element,index) => {
                  return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>{element}</span>
                  )
                 })
                }
              </div>
            </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Projects;