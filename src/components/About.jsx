import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import profilePic from "../assets/profile.jpg";
const ServiceCard = ({ index, title, icon, additionalImages }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-lg overflow-hidden red-yellow-gradient"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative hover:scale-105 transition-transform duration-300"
        >
          <div className="w-48 h-32 flex justify-center items-center">
            <img
              src={icon}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-white text-[40px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={`text-[#7A2A3D] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]}`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex flex-col md:flex-row items-center gap-8 mt-5"
      >
        {/* Description */}
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Hi, I'm a passionate software developer with a strong interest in
          building scalable and efficient web applications. I enjoy solving
          complex problems, optimizing performance, and working on cloud-based
          solutions that make a real-world impact. With hands-on experience in
          modern web technologies, I continuously strive to enhance my skills
          and stay updated with industry trends.
        </p>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[#fef6f7]] border-4 shadow-card">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-bold`}>Little joys in life!🌹🤗</p>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I don't always fix bugs... Sometimes, I close my laptop and remind myself that life has so many better things to offer.
        
        <br />
        Enjoy life — Bugs won't go anywhere.😌
        </p>
      </motion.div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
