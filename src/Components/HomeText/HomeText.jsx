import "./HomeText.css"
import Lottie from "lottie-react";
import Home from "./Home.json"

const HomeText = () => {
  return (
    <>
    <div className="animate" data-aos="zoom-in">
      <Lottie animationData={Home} className="animation"/>
      </div>
    <div className="Text" 
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        
        <h1>Automate & Ai </h1>
        <h3>Business Sollutions</h3>
    </div>
    </>
  )
}

export default HomeText