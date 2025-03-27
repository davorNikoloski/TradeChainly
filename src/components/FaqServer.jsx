// FaqServer.js
import Faq from "./Faq";

export default function FaqServer({ faqData }) {
  return <Faq faqData={faqData} />; // Directly use the passed FAQ data
}
