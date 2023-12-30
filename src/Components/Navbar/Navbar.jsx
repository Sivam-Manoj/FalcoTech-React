import { useContext } from "react";
import "./Navbar.css"
import { CgMenuGridO } from "react-icons/cg";
import InterContext from "../../Context/InteractiveContexProvider";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    const{nav,SetNav}=useContext(InterContext);
    const HandleNav=()=>{
        SetNav(!nav);
    }
  return (
    <nav className="navbar" data-aos="fade-down">
        <div className="logo">
            <span>FalcoTech</span>
        </div>
        <ul className={`nav-ul ${nav?"active":""}`}>
            <li className="home-active"><a href="#" aria-disabled>Home</a></li>
            <li><a href="#main">Bussines</a></li>
            <li><a href="#about">About</a></li>
            
        </ul>
        <span className={`contact ${nav?"active":""}`}><a href="#contact">Contact</a></span>
        {nav?<GrClose className="menu-icon" onClick={()=>{HandleNav()}} /> :< CgMenuGridO className="menu-icon" onClick={()=>{HandleNav()}}/>}
    </nav>
  )
}

export default Navbar