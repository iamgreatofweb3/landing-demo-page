import "./Process.css"
import { SatelliteDishIcon, Monitor, TrendingUp } from "lucide-react"
export default function Process() {
    return (
        <section id="Process">
            <h1>Our Delivery Process</h1>
            <div className="process-Container">

            <div className="process-box">
                <h4>STEP 1</h4>
                <SatelliteDishIcon className="Icon"/>
                <h2>Discovery</h2>
                <p>We map your product goals, users,
                     and roadmap before writing code.</p>
            </div>
            <div className="process-box">
                <h4>STEP 2</h4>
                <Monitor className="Icon"/>
                <h2>Design & Build</h2>
                <p>Our team designs and develops in fast iterations
                     with regular demos.</p>
            </div>
            <div className="process-box">
                 <h4>STEP 3</h4>
                <TrendingUp className="Icon"/>
                <h2>Launch & Scale</h2>
                <p>We ship confidently,
                     track outcomes, and improve with real user data.</p>
            </div>
            </div>
        </section>
    )
}