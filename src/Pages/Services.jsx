import "./Services.css"
// import HeroSection from "../HeroSection"
import { Monitor, Smartphone, Layers} from "lucide-react"
export default function Services() {
    return (
       <section id="Services" className="main-container">
        <h1>What We Do</h1>
        <p>
            From idea to production, we deliver end-to-end 
            software solutions tailored to your business goals.
        </p>
        <div className="section-Container">

        <div className="section-Boxs">
            <Smartphone className="Icons"/>
            <h3>
                Mobile App Development
            </h3>
            <h6>
                Cross-platform and native apps 
                built for speed, reliability, and long-term growth.
            </h6>
        </div>
        <div className="section-Boxs">
            <Monitor className="Icons"/>
            <h3>
                Website Development
            </h3>
            <h6>
                Modern, scalable websites and web apps engineered 
                with clean architecture and performance in mind.
            </h6>
        </div>
        <div className="section-Boxs">
            <Layers className="Icons"/>
            <h3>
               Product Design
            </h3>
            <h6>
                UX-first design systems and interfaces t
                hat balance visual impact with conversion goals.
            
            </h6>
        </div>


        </div>




       </section>
     
    )
}