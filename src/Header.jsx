import "./Header.css"
import { Moon,Sun} from "lucide-react"
export default function Header () {
    return (
        <>
        {/* <div className="main-container">

        <header>

            <div className="left-header">
                <h3>ApexForge Technologies</h3>
            </div>
            <div className="right-header">
              <ul>
                <a href="#Services"><li>Services</li></a>
                <a href="#Process"><li>Process</li></a>
                <a href="#Work"><li>Work</li></a>
                <a href="#Contact"><li>Contact</li></a>
               <Sun className="icon SunIcon"/>
              </ul>    
            </div>
        </header>
        </div> */}
             <div className="header-container">
          <div className="left-header">
            <h3>ApexForge Technologies</h3>
          </div>
           {/* Space for the 2 diffrent flex divs */}
            <div className="rightHeader">
              <button ><Sun className="rightIcon"/></button>
                  <ul className="dropDownContainer">
                  <a href="#story"><li>Our Story</li></a>
                  <a href="#products"><li>Products</li></a>
                  <a href="#sustainability"><li>Sustainability</li></a>
                  <a href="#partner"><li>Partner</li></a>
                  <a href="#contact"><li>Contact</li></a>
                <button className="button"><a href="#partner">Partner With Us</a></button>
                </ul>
            </div>
        </div>
            
            
        </>
    )
}