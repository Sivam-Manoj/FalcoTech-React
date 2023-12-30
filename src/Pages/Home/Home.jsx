

import Button from "../../Components/Button/Button"
import HomeText from "../../Components/HomeText/HomeText"
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.css"

const Home = () => {
  return (
    <>
    <div className="display" id="home">
    <div className="overlay">
    <Navbar/>
    <HomeText/>
    <Button/>
    </div>
    
    </div>
    
    
    </>
  )
}

export default Home