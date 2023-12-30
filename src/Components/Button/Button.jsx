import "./Button.css"
import Lottie from "lottie-react"
import handshake from "./handshake.json"
import scroll from "./scroll_down.json"
const Button = () => {
  return (
    <div className="btn-bg" >
        <a href="#contact"><div className="btn1" data-aos="fade-left">
            <Lottie animationData={handshake} className="hand"/>
        <span >Become Our Partner</span>
        </div></a>
         <Lottie animationData={scroll} className="scroll" data-aos="fade-left"/>
         <Lottie animationData={scroll} className="scroll2" data-aos="fade-right"/>
    </div>
  )
}

export default Button