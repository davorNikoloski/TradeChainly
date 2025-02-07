import fs from 'fs';
import path from 'path';
import Faq from './Faq'; // Import the Client Component

async function getFaqData() {
    const filePath = path.join(process.cwd(), 'src/data/faqContent.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const faqData = JSON.parse(jsonData).faqs;
    return faqData;
}

export default async function FaqServer() {
    const faqData = await getFaqData(); // Fetch FAQ data at build time
    return <Faq faqData={faqData} />; // Pass it to Client Component
}
