import React from "react";
import {RiReactjsLine} from "react-icons/ri";
import {RiNextjsLine } from "react-icons/ri";
import {SiMongodb } from "react-icons/si";
import {RiTailwindCssFill  } from "react-icons/ri";
import {RiJavascriptLine } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import {motion} from "framer-motion";


const iconVariants = (duration) =>({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technology = () => {
  return <div className=" border-b border-neutral-800 pb-24 ">
    <motion.h2 
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y:-100}}
     transition={{duration:1.5}}
    className=" my-20 text-center text-4xl">Technologies</motion.h2>
    <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
    className=" flex flex-wrap items-center justify-center gap-4">
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsFill  className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
            <RiNextjsLine  className="text-7xl" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb  className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill   className="text-7xl text-[#38BDF8]" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptLine  className="text-7xl text-black bg-yellow-400 rounded-2xl" />
        </motion.div>
    </motion.div>
    </div>;
};

export default Technology;
