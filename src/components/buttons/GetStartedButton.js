import Link from "next/link";
import { FiArrowRight } from 'react-icons/fi';
import '../../styles/navButton.css';

export default function GetStartedButton({ href, text, className, showArrow = true, width = "140.2px" }) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Link href={href} className="nav-button flex items-center justify-center" style={{ width }}>
        {text}
        {showArrow && <FiArrowRight className="ml-2 h-[18px]" />}
      </Link>
    </div>
  );
}
