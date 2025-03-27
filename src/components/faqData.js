// src/lib/faqData.js
import fs from 'fs';
import path from 'path';

export function getFaqData() {
  const filePath = path.join(process.cwd(), 'src/data/faqContent.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData).faqs;
}