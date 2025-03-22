import ContactMain from "@/components/contactComponents/ContactMain";
import ContactCardSection from "@/components/contactComponents/ContactCardSection";


import "../../styles/contact.css"; 

export default function Contact() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full h-[130vh] gradient-bg top-0 z-[-1]">

      </div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full">
          <ContactMain />
        </div>
        <div className="w-full">
          <ContactCardSection />
        </div>
      </div>
    </div>
  );
} 