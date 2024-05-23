import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-14 flex items-center justify-between py-5">
      <div className=" flex flex-shrink-0 items-center ">
        
        <img className="mx-2 w-10 rounded-lg"  src={logo} alt="logo" />
        
      </div>
      <div className=" m-8 flex items-center justify-center gap-3 text-2xl lg:gap-6">
        <a href="https://www.linkedin.com/in/priyanshusingh29/">
        <FaLinkedin />
        </a>
        <a href="https://github.com/singhhpriyanshu">
        <FaGithub />
        </a>
        <a href="https://leetcode.com/u/Steveroger001/">
        <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/toxic_priyanshuap/">
        <FaInstagram />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
