"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import "../../styles/contactCard.css";

export default function ContactCardSection() {
  return (
    <div className='main-faq md:p-[2rem] p-[14px] mx-auto max-w-[1200px]'>
      <div className='faq-cont w-full h-full md:pt-[100px] flex flex-col md:gap-[6rem] gap-[50px]'>
        <div className='faq-lower flex md:flex-row flex-col md:gap-[30%] gap-[50px] items-center md:justify-center'>

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className='faq-left flex flex-col text-center gap-[1.3rem]'
          >
            <h1 className="font-[500] md:text-[55px] text-[34px] font-mulish md:leading-[5rem] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
              Contact Us
            </h1>
            <p className='text-[#9e9e9e] text-[16px] font-[400]'>
              You can contact us at Support@example.com <br />
              if you have any questions. <br />
              Please give us 24-48 hours to get back to you.
            </p>
          </motion.div>

          {/* Right Section (Card) */}
          <div className='faq-right h-auto w-auto'>
            <div className='left-cont contact-card-style flex flex-col items-center justify-center p-[6rem] rounded-[14px] gap-[1.3rem]'>

              {/* Animated Content Inside Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
                className='text-center'
              >
                <h3 className='text-[24px] font-semibold text-white font-mulish'>Contact Email:</h3>
                <p className="text-[#9e9e9e] text-[16px] font-[400]">youremail@example.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
                className='text-center'
              >
                <h3 className='text-[24px] font-semibold text-white mt-4'>Social Media:</h3>
                <div className="media-icons flex gap-2 mt-2">
                  <Link href="https://facebook.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Facebook size={16} color="#ffffff" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Instagram size={16} color="#ffffff" />
                  </Link>
                  <Link href="https://twitter.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Twitter size={16} color="#ffffff" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Linkedin size={16} color="#ffffff" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} 
                className='text-center'
              >
                <h3 className='text-[24px] font-semibold text-white mt-4'>Business Hours:</h3>
                <p className="text-[#9e9e9e] text-[16px] font-[400]">9am - 5pm EST</p>
                <p className="text-[#9e9e9e] text-[16px] font-[400]">Monday - Friday</p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
