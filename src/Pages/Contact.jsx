import "./Contact.css"
export default function Contact () {
    return (
        <div className="Contact-Container" id="Contact">
            <div className="left-contact-container">
                <h1>Ready to Build with ApexForge Technologies?</h1>
                <p> Let's discuss your app, website, or product vision.
                     We'll help you move from concept to a launch-ready
                      solution.</p>
            </div>
            <div className="right-contact-container">
                <h6>Email us</h6>
                <a href="mailto:ApexForgeTechnologies001@gmail.com">ApexTech@gmail.com</a>
                               
                    <div className="div">
                       <h6>Call or WhatsApp us today</h6>
                       <a href="tel:+7064983946">+234 706 498 3946</a>
                    </div>
            </div>
        </div>
    )
}