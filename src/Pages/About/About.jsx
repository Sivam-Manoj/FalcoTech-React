import "./About.css"
import Lottie from "lottie-react"
import about from "./about.json"
import wedo from "./wedo.json"
import apple from "./apple.json"
import google from "./google.json"
import microsoft from "./microsoft.json"
import facebook from "./facebook.json"

const About = () => {
  return (
    <div className="display-about" id="about">
        <h1>About Us</h1>
        <div className="aboutus">
            <Lottie animationData={about} className="about-animation" data-aos="fade-down-right"/>
            <div className="text-box" data-aos="fade-down-left">
            <span data-aos="zoom-in">&quot;Welcome to <b>FalcoTech</b>, where a decade of expertise converges with innovation to redefine the landscape of automation, AI, and software development. Over the past 10 years, we have consistently propelled businesses into the future, seamlessly integrating cutting-edge technologies. Proudly aligned with industry giants Facebook (now Meta), Amazon, Apple, Netflix, and Google (now Alphabet), our journey is marked by a commitment to excellence, precision, and unwavering creativity. Partnering with influential entities such as LinkedIn and Visa, we&apos;ve forged a legacy of success. At <b>FalcoTech</b>, we don&apos;t just build solutions; we craft experiences that transcend expectations. Join us in navigating the ever-evolving tech realm, where your success is not just a goal; it&apos;s our legacy&quot;</span></div>
        </div>
        <h2 className="li-text">what we have?</h2>
        <ul className="list" data-aos="fade-up-left">
          <li>a team of over 200 seasoned engineers with a minimum of 10 years of experience in AI, automation, and software development.</li>
          <li>We specialize in cutting-edge AI development, covering machine learning, natural language processing, computer vision, and deep learning.</li>
          <li> our expertise extends to robotic process automation (RPA), intelligent process automation (IPA), and workflow automation.</li>
          <li>Our software development services encompass full-stack development, custom solutions, mobile app development, and web application development.</li>
          <li>Cloud services are a forte, with expertise in AWS, Azure, and Google Cloud Platform, providing scalable and robust solutions</li>
          <li>Our team is well-versed in DevOps, CI/CD, and cloud-native development, ensuring seamless integration and deployment.</li>
          <li>We excel in data science and analytics, covering data warehousing, business intelligence, and data visualization.</li>

        </ul>
        <Lottie animationData={wedo} className="wedo" data-aos="fade-up-right"/>

        <div className="partners">
            <h2>Our Partners</h2>
            <div className="animate-list">
            <Lottie animationData={apple} className="animation5" data-aos="fade-up"/>
            <Lottie animationData={google} className="animation6" data-aos="fade-up"/>
            <Lottie animationData={microsoft} className="animation7" data-aos="fade-up"/>
            <Lottie animationData={facebook} className="animation8" data-aos="fade-up"/>
            </div>
        </div>
    </div>
  )
}

export default About