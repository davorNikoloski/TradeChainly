import Link from "next/link";
import { FiArrowRight } from 'react-icons/fi';
import '../../styles/navButton.css';

export default function GetStartedButton({ href = 'https://app.tradechainly.website/', text, className, showArrow = true, width = "140.2px" }) {
  const isExternal = href.startsWith('http');

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Link 
        href={href} 
        className="nav-button flex items-center justify-center" 
        style={{ width }} 
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {text}
        {showArrow && <FiArrowRight className="ml-2 h-[18px]" />}
      </Link>
    </div>
  );
}
