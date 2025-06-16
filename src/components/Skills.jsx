import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Python_Logo,
  Bootstrap_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  Firebase_Logo,
  Linux_Logo,
  VSCode_Logo,
  Tailwind_Logo
} from "../assets/images/index";

import dart_logo from "../assets/images/dart.png"
import flutter_logo from "../assets/images/flutter.png"
import grafana_logo from "../assets/images/grafana.jpeg"
import postman_logo from "../assets/images/postman.jpeg"
import androi_logo from "../assets/images/android.png"
import vite_logo from "../assets/images/vitejss.png"
import figma_logo from "../assets/images/figma.png"
import photoshoplogo from "../assets/images/photoshop.png"

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name)
  }

  const cards = [
    {
      title: "Languages",
      items: [
        { src: dart_logo, alt: "Dart" },
        { src: JavaScript_Logo, alt: "JavaScript" },
        { src: Python_Logo, alt: "Python" },
        { src: HTML_Logo, alt: "HTML5" },
        { src: CSS_Logo, alt: "CSS3" },
      ],
    },
    {
      title: "Library and Frameworks",
      items: [
        { src: flutter_logo, alt: "Flutter" },
        { src: React_Logo, alt: "React" },
        { src: vite_logo, alt: "Vite" },
        { src: Bootstrap_Logo, alt: "Bootstrap" },
        { src: Tailwind_Logo, alt: "Tailwind" },
      ],
    },
    {
      title: "Other Services",
      items: [
        { src: Git_Logo, alt: "Git" },
        { src: Github_Logo, alt: "Github" },
        { src: Linux_Logo, alt: "Linux" },
        { src: Firebase_Logo, alt: "Firebase" },
        { src: grafana_logo, alt: "Grafana" },
      ],
    },
    {
      title: "Other tools",
      items: [
        { src: androi_logo, alt: "Android Studio" },
        { src: postman_logo, alt: "Postman" },
        { src: VSCode_Logo, alt: "Visual Studio Code" },
        { src: figma_logo, alt: "Figma" },
        { src: photoshoplogo, alt: "Photoshop" },
      ],
    },
  ];



  return (
    <div className="pb-5 h-auto my-20" id="skills">

      <div className="text-center font-bold flex justify-between items-center">
        <h1 className="text-6xl max-md:text-4xl">Skills</h1>
        <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10 flex-wrap">

        {cards.map((value, index )=> {
          return (
              <div className="flex flex-col gap-10 max-sm:gap-5 max-md:w-full w-5/12" key={index}>
                <div className="flex flex-col gap-5">
                  <h4 className="text-2xl">{value.title}</h4>
                  <div className="flex gap-5 max-md:flex-wrap">
                      {
                        value.items.map((icon, id) => {
                          return (
                            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName(icon.alt)} onMouseLeave={() => handleLeave(null)} key={id}>
                            <img src={icon.src} alt={icon.alt} className="h-10"  />
                            </div>
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
  );
}

export default Skills;