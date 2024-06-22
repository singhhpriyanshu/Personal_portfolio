import React from "react";
import profilepic from "../assets/profile.jpg";
import { motion } from "framer-motion"


const container = (delay) =>({
  hidden: { x: -100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay},
  },
})

const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1  
              variants={container(0)}
              initial= "hidden"
              animate="visible"          
            className="pb-16 text-2xl font-semibold tracking-tight lg:mt-16 lg:text-7xl lg:font-semibold">
              Priyanshu Singh
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial= "hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-[22px] tracking-tight text-transparent lg:text-4xl ">
              Frontend Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial= "hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 tracking-tighter text-center lg:text-start">
            Hi, I'm Priyanshu Singh, a passionate Frontend Developer with over 1 years of experience in building responsive and user-centric web applications. I have a strong background in HTML, CSS, JavaScript, and modern frontend frameworks like React and Angular.js. I can also build eye catching animated site using GSAP, locomotive js & Framer motion. 
            </motion.p>
            <motion.button 
            variants={container(1.2)}
            initial= "hidden"
            animate="visible"
            className=" rounded-full font-semibold bg-orange-400 text-white m-8 p-3" >
              <a href="https://drive.google.com/file/d/1TfWEdEeemMfz9WuJA6QgEi9fpYmJI9Ur/view">
                CV/Resume
              </a>
            </motion.button>

          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4  lg:p-6">
          <div className=" flex justify-center">
            <motion.img initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            className="rounded-full" src={profilepic} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
