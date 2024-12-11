import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/navigation/Nav";
import Header from "./components/Header/Header";
import Logotypes from "./components/logotips/Logotypes";
import Subheading from "./components/subheading/Subheading";
import Services from "./components/services/Services";
import Secondsubheading from "./components/subheading2/Secondsubheading";
import Casestudies from "./components/Casestudies/Casestudies";
import Thirdsubheading from "./components/subheading3/Thirdsubheading";
import Faqsection from "./components/Faqsection/Faqsection";
import Fourthsubheading from "./components/subheading4/Fourthsubheading";
import Team from "./components/Team/Team";
import Testimonials from "./components/testimonials/Testimonials";
import Fifthsubheading from "./components/subheading5/Fifthsubheading";
import Sixthsubheading from "./components/subheading6/Sixthsubheading";
import Contactus from "./components/contactus/Contactus";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="">
       <Nav/>
       <Header />
       <Logotypes />
       <Subheading />
       <Services />
       <Secondsubheading />
       <Casestudies />
       <Thirdsubheading />
       <Faqsection />
       <Fourthsubheading />
       <Team />
       <Fifthsubheading />
       <Testimonials />
       <Sixthsubheading />
       <Contactus />
       <Footer />
    </div>
  );
}
