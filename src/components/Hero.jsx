import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className= "relative w-full h-screen mx-auto" >
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">  
            <div className="w-5 h-5 rounded-full bg-[#F7F2E7]" />
            <div className="w-1 sm:h-80 h-40 vintage-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-[#F7F2E7]`}>Hello world, I'm <span className="text-[#f2bd5c]">Ming Qi</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I love to build web applications and <br className="sm:block hidden"/> enjoy seeing ideas come to life.</p>
          </div>
      </div>
      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#F7F2E7] flex justify-center items-start p-2">
            <motion.dev
            animate ={{y:[0,24,0]}}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#F7F2E7] mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;