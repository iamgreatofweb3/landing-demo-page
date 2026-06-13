import "./Work.css"
export default function Work() {
    return (
        <div className="main-container">

        <section id="Work">
            <h1>Featured Projects</h1>
            <h6 className="text">A glimpse of what we can build with you.</h6>
             <div className="Work-cnt">
                <div className="work-Box">
                    <h6>Mobile Banking Platform</h6>
                    <h3>FinFlow</h3>
                    <h5>
                        Secure onboarding, instant transfers, 
                        and analytics-driven retention flows.
                    </h5>
                </div>
                <div className="work-Box">
                      <h6>E-commerce Web App</h6>
                    <h3>VibeCart</h3>
                    <h5>
                        Lightning-fast storefront 
                        with personalized 
                        recommendations and live inventory.
                    </h5>
                </div>
                <div className="work-Box">
                      <h6>Healthcare Scheduling Suite</h6>
                    <h3>MedLink Pro</h3>
                    <h5>
                       Multi-role dashboard for clinics, reducing
                        no-shows and administrative overhead.
                    </h5>
                </div>

             </div>



        </section>
        </div>
    )
}