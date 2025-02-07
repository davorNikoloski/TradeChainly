"use client"; // This makes it a Client Component

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GetStartedButton from './buttons/GetStartedButton';
import FaqList from './helperComponents/FaqList';

export default function Faq({ faqData }) {
  const [isInView, setIsInView] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsTextVisible(true);
        } else {
          setIsInView(false);
          setIsTextVisible(false);
        }
      },
      { threshold: 0 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className='main-faq md:p-[2rem] p-[14px] mx-auto max-w-[1200px]'>
      <div className='faq-cont w-full h-full md:pt-[100px] flex flex-col md:gap-[6rem] gap-[50px]'>
        <div className="faq-title flex md:items-center md:justify-center">
          <h1 className="md:text-[47px] text-[28px] font-[600] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text m-0">
            Frequently Asked Questions
          </h1>
        </div>

        <div className='faq-lower flex md:flex-row flex-col md:gap-[20rem] gap-[50px] items-start md:justify-between'>
          <div className='faq-left h-full w-auto md:min-w-[25%]'>
            <div className='left-cont bg-[#151424] flex flex-col items-center justify-center p-[32px] rounded-[14px] gap-[1.3rem]'>
              <h2 className='text-[37px] font-normal leading-[1.2] text-center'>
                Still have questions?
              </h2>
              <p className="text-[16px] font-normal leading-[1.4] text-gray-400 mt-0 mb-[10px] text-center">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <GetStartedButton 
                href="/contact" 
                text="Contact Us" 
                showArrow={false} 
                width="200px"
              />
            </div>
          </div>
          <FaqList faqData={faqData} /> {/* Pass preloaded data */}
        </div>
      </div>
    </div>
  );
}
