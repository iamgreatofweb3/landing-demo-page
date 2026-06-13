import "./HeroSection.css"
import { ArrowRight, CheckCircle} from "lucide-react"
export default function HeroSection () {
    return(
        <div className="main-container">
          <div className="hero-Container">
            <div className="right-hero">
                <h4>SOFTWARE DEVELOPMENT AGENCY</h4>
                <h1>
                    We Build Mobile Apps, Websites, and Digital
                     Products that Move Businesses Forward.
                </h1>
                <p>
                    ApexForge Technologies partners with founders and
                     teams to design and develop
                     technology that is beautiful, scalable,
                      and ready for real users.
                </p>
                 <div className="btnFamily">
                    <button className="navBtn">
                        <a href="#Contact">Start Your Project  
                        </a>
                        <ArrowRight className="arrow"/> </button>
                        
                    <button className="WorkBtn">
                        <a href="#Work">
                            View Our Work
                        </a>
                        </button>
                 </div>

                 <div className="strategy-cnt">
                    <section>
                        <CheckCircle className="checkIcon"/> Business-driven strategy
                    </section>
                    <section>
                        <CheckCircle className="checkIcon"/> Business-driven strategy
                    </section>
                    <section>
                        <CheckCircle className="checkIcon"/> Business-driven strategy
                    </section>
                 </div>
            </div>
            <div className="left-hero">
                <h4>WHY CHOOSE US</h4>
                <div className="section-Box">
                    <h6>Product-minded engineers and designers 
                        under one roof</h6>
                </div>
                <div className="section-Box">
                    <h6>Fast delivery cycles without compromising 
                        quality</h6>
                </div>
                <div className="section-Box">
                    <h6>Transparent communication from kickoff to launch</h6>
                </div>
            </div>




          </div>
        </div>
    )
}