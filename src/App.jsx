import Header from "./Header";
import Contact from "./Pages/Contact"
import Process from "./Pages/Process"
import Services from "./Pages/Services"
import Work from "./Pages/Work"
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";
export default function App () {
  return(
    <>
<Header/>
<HeroSection/>
<Services/>
<Process/>
<Work/>
<Contact/>
<Footer/>

    
    </>
  );
}