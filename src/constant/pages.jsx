import { IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const pages = [
  { name: "home", icon: <IoHomeOutline /> },
  { name: "aboutMe", icon: <FaRegUser /> },
  { name: "projects", icon: <BsCollection /> },
  { name: "skills", icon: <GiSkills /> },
  { name: "contactMe", icon: <IoLocationOutline /> },
];

export default pages;
