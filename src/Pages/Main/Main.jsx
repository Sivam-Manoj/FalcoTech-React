import "./Main.css"
import Lottie from "lottie-react"
import automation from "./automate.json"
import robotics from "./robotics.json"
import software from "./all-platforms.json"
import idea from "./idea.json"
import makeit from "./makeit.json"
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import InterContext from "../../Context/InteractiveContexProvider"


const Main = () => {
    const{nav,SetNav}=useContext(InterContext);
    const HandleNav=()=>{
        SetNav(!nav);
    }
  return (
    <div className="display-main" id="main">
        <a href="#home"><FaHome  className="back-2-home" onClick={()=>{HandleNav()}}/></a>
        <h1 className="main-title">Why Choose Us?</h1>
        <div className="main-items">
        <div className="robotics" data-aos="fade-right">
            <div className="card">
            <h3 className="h3">Automation</h3>
            <Lottie animationData={automation} className="animation1"/>
                <div className="description1" >
                    <p data-aos="zoom-in-down">we are at the forefront of innovation, leveraging cutting-edge automation technologies to redefine the way businesses operate. Our tailored automation solutions streamline processes, reduce operational costs, and elevate overall performance. By seamlessly integrating advanced robotics, artificial intelligence, and smart algorithms, we empower your organization to focus on what truly matters—innovation, growth, and unparalleled success. Embrace the power of automation with <b>FalcoTech</b> and witness a transformative journey towards unparalleled efficiency.</p>
                </div>
            </div> 
        </div>
        <div className="ai" data-aos="fade-up">
            <div className="card">
            <h3 className="h3">Ai For Business</h3>
                <Lottie animationData={robotics} className="animation2"/>
            
                <div className="description">
                    <p data-aos="zoom-in-up">At the heart of our offerings lies the power of Artificial Intelligence (AI), unlocking unprecedented insights and strategic advantages for your enterprise. Harness the potential of machine learning algorithms and predictive analytics to make informed decisions, optimize operations, and stay ahead of the competition. Our customized AI solutions seamlessly integrate into your business ecosystem, empowering you with real-time data analysis and foresight. Embrace the future of business with <b>FalcoTech</b>, where AI isn&apos;t just a tool—it&apos;s the key to unlocking innovation, driving growth, and shaping a successful tomorrow.</p>
                </div>
            </div> 
        </div>
        <div className="software" data-aos="fade-left">
            <div className="card">
            <h3 className="h3">Software Development</h3>
            <Lottie animationData={software} className="animation2"/>
                <div className="description">
                    <p data-aos="zoom-in-left">we are leveraging cutting-edge automation technologies to redefine the way businesses operate. Our tailored automation solutions streamline processes, reduce operational costs, and elevate overall performance. By seamlessly integrating advanced robotics, artificial intelligence, and smart algorithms, we empower your organization to focus on what truly matters—innovation, growth, and unparalleled success. Embrace the power of automation with <b>FalcoTech</b> and witness a transformative journey towards unparalleled efficiency.</p>
                </div>
            </div> 
        </div>

        </div>
        <div className="ideas">
            <h1>Have an idea?</h1>
            <div className="quotbox"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <span>&quot;How can we tailor our innovative ideas to best align with your specific needs and goals? What features or aspects of our proposed solution would make the most impact on your business, and how can we ensure a seamless integration that maximizes the benefits for your organization?&quot;</span></div>
            <Lottie animationData={idea} className="animation3" data-aos="fade-right"/>
            <h3>Let&apos;s make it happen</h3>
            <div className="quotbox1" 
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-bottom">
            <span>Our commitment is to turn your visionary ideas into tangible, impactful solutions. With a dedicated team of skilled professionals, we prioritize understanding your unique needs, customizing our approach, and delivering results that exceed expectations. Your success is our priority, and we&apos;re excited to bring your ideas to life with creativity, precision, and a relentless pursuit of excellence.</span>
            </div>
            <Lottie animationData={makeit} className="animation4" data-aos="fade-left"/>
        </div>
        
    </div>
  )
}

export default Main