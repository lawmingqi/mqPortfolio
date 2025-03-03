import React, {useState} from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { Button } from "../assets/viewButton"
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images = [],  // Default empty array if images is undefined
  source_code_link,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#eee1ca] p-5 rounded-2xl sm:w-[330px] w-full shadow-card">
      
      <div className="relative w-full h-[240px]">
        <img
          src={images[imageIndex] || ""} 
          alt="project_image"
          className="w-full h-full object-contain rounded-2xl" 
        />
        <div className="absolute top-0 right-0 flex justify-end items-start z-20">
          <Button sourceLink={source_code_link} />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            onClick={prevImage}
            className=" w-8 h-8 rounded-full flex justify-center items-center cursor-pointer absolute left-[-10px] hover:scale-150 transition-transform duration-300"
          >
            {/* Left arrow SVG */}
            <svg
              className="icon text-white"
              viewBox="0 0 24 24"
              fill="#7A2A3D"
              transform="rotate(180)"
              width={36} 
              height={36} 
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            onClick={nextImage}
            className=" w-8 h-8 rounded-full flex justify-center items-center cursor-pointer absolute right-[-10px] hover:scale-150 transition-transform duration-300"
          >
            {/* Right arrow SVG */}
            <svg
              className="icon text-white"
              viewBox="0 0 24 24"
              fill="#7A2A3D"
              width={36} 
              height={36} 
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h3 className="text-[#7A2A3D] font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-black text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`text-[#7A2A3D] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects demonstrate my skills and capabilities in creating impactful solutions, 
          developed through both academic assignments and collaborative full-stack projects with external stakeholders. 
          Each project is briefly outlined, with links to code repositories or prototypes for a deeper exploration. 
          This collection reflects my journey in the IT field, where I've worked with diverse technologies and successfully managed a 
          variety of projects—from web applications to user experience design—showcasing my adaptability and ability to handle different project types effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
