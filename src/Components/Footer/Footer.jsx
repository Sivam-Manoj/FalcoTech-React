import "./Footer.css"
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdOutlinePermPhoneMsg } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="footer-display" data-aos="fade-down">
      <h3>FalcoTech || &copy;ALL RIGHTS RESERVED</h3>
      <div className="heading-h4">
      <h4>follow us</h4>
      <h4 className="enq">other enqueries</h4>
      </div>
      <div className="footer-items">
      
      <div className="icons">
      
        <ul>
          <li><a href="https://m.facebook.com/profile.php/?id=100086566274957"><CiFacebook /></a></li>
          <li><a href="https://vm.tiktok.com/ZSNnc3aAA/"><RiTiktokLine /></a></li>
          <li><a href="https://www.linkedin.com/in/sivammanoj"><CiLinkedin /></a></li>
        </ul>

      </div>
      
      <div className="other">
        <MdOutlinePermPhoneMsg className="icon-2" id="none-icon"/>
        <p className="heading-none">Other Enqueries</p>
        <CiPhone className="icon-2"/>
        <p>+94-779613384</p>
        <CiMail className="icon-2"/>
        <p>manom8193@gmail.com</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer