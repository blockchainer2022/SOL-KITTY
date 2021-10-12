/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { SiDiscord } from "react-icons/si";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/image/LOGO.png";
const Index = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="flex justify-center">
      <div>
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};

export default Index;

// const ListItem = ({ text = "Home", link = "#" }) => (
//   <li className="">
//     <a href={link} className="px-10 uppercase inline-block">
//       {text}
//     </a>
//   </li>
// );
