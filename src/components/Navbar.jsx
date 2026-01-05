import { use, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NavbarSection = () => {
    const [hov,setHov] = useState(false);
    const [menuOpen,setMenuOpen] = useState(false);
    // const navigate = useNavigate();

    const scrollSection = (id) => {
      console.log(id)
      document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    }

    const MobileScrollSection = (id) => {
      setMenuOpen(false)
      scrollSection(id)
    }

  return (
    <>
    <nav className="bg-blue-500 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} 
        className={`text-xl font-bold ${hov ? 'text-blue-900' : 'text-white'}`} >Krishna Kishore Gedela</div>
        <ul className="space-x-24 hidden md:block">
            <span onMouseEnter={() => scrollSection("about")} className={"text-white"}>About</span>
            <span onMouseEnter={() => scrollSection("skills")} className={"text-white hover:text-blue-300"}>Skills</span>
            <span onMouseEnter={() => scrollSection("projects")} className={"text-white hover:text-blue-300"}>Projects</span>
        </ul>
        <div className="md:hidden text-white text-2xl">
            {menuOpen ? 
            <MdClose onClick={() => setMenuOpen(false)}/> :
            <FiMenu onClick={() => setMenuOpen(true)}/>}
      </div>
      </div>
    </nav>
    <div className={`
    md:hidden
    fixed top-10 right-0
    h-screen w-full z-50
    text-black bg-white
    flex flex-col justify-center align-center items-center
    space-y-8
    transform transition-transform duration-300 ease-out
    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}>
        <span onClick={() => MobileScrollSection('about')}>About</span> 
        <span onClick={() => MobileScrollSection('skills')}>Skills</span>
        <span onClick={() => MobileScrollSection('projects')}>Projects</span>
        <span onClick={() => MobileScrollSection('contact')}>Contact</span>
    </div>
    </>
    )
}
export default NavbarSection;