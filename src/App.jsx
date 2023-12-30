
import Footer from "./Components/Footer/Footer"
import { InteractiveContextProvider } from "./Context/InteractiveContexProvider"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Main from "./Pages/Main/Main"

const App = () => {
  return (
    <>
      <InteractiveContextProvider>
        <Home/>
        
        
        <div className="main-bg">
          <Main/>
        </div>
        <div className="about-bg">
          <About/>
        </div>
        <div className="contact-bg">
          <Contact/>
        </div>
        <div className="footer-bg">
          <Footer/>
        </div>
        </InteractiveContextProvider>
    
    </>
  )
}

export default App