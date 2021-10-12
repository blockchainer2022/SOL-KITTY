/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/image/logo2.png";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Discord from "../../assets/image/discord.svg";
const Index = () => {
  return (
    <footer className=" text-center py-10">
      <div className="container">
        <div className="border-t-4 border-white flex justify-center items-center md:justify-between py-8  flex-col md:flex-row ">
          <a
            href="#"
            className="uppercase text-primary font-serif text-xl mb-8 md:my-0"
          >
            Back to Top
          </a>
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <div className="flex text-xl mt-8 md:my-0">
            <div className="p-2 bg-secondary border-2 border-white">
              <FiTwitter />
            </div>
            <div className="p-2 ml-2 bg-secondary border-2 border-white">
              <AiOutlineYoutube />
            </div>
            <div className="p-2 ml-2 bg-secondary border-2 border-white">
              <AiOutlineInstagram />
            </div>
            <div className="p-2 ml-2 bg-secondary border-2 border-white">
              <img src={Discord} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
