import "./Footer.css"
export default function Footer() {
    const fullYear = new Date().getFullYear()
    return (
        <footer>
            <div className="left-footer">
          <span>
            &copy;{fullYear}  ApexForge Technologoes. Crafted with clarity and intent.
          </span>
            </div>
            <div className="right-footer">

          <div className="contacts">
            <div className="mail">
                <a href="mailto:ApexForgeTechnologies@gmail.com">ApexForgeTechnologoes@gmail.com</a>
            </div>
            <div className="phone">
                <a href="tel:+7064983946">+234 706 498 3946</a>
            </div>
          </div>
            </div>
        </footer>
    )
}