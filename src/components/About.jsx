import React from "react";
import about from "../assets/about.jpg"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className=" my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className=" flex flex-wrap">
        <motion.div 
          whileInView={{opacity:1, x: 0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-3xl" src={about} alt="about" />
            </div>
        </motion.div>
        <motion.div 
           whileInView={{opacity:1, x: 0}}
           initial={{opacity:0, x:100}}
           transition={{duration:0.5}}
        className=" w-full lg:w-1/2">
                <div className=" flex justify-center lg:justify-start">
                    <p className=" my-3 max-w-xl py-8 ml-9 text-center lg:text-justify"> I am a proactive problem-solver who thrives in fast-paced environments. My attention to detail and commitment to clean, maintainable code ensure that my projects not only look good but are also robust and scalable.<br></br>I am a lifelong learner, constantly exploring new technologies and best practices. I regularly attend web development conferences and contribute to open-source projects.<br></br>Outside of coding, I enjoy hiking, playing video games, and experimenting with new recipes in the kitchen.<br></br>Feel free to get in touch via email at singhh.priyanshu@gmail.com or connect with me on LinkedIn. I'm always open to discussing new projects or collaboration opportunities.</p>
                </div>
            </motion.div>
      </div>
    </div>
  );
};

export default About;
