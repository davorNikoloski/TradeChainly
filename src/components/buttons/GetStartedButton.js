import Link from "next/link";
import { FiArrowRight } from 'react-icons/fi';

import '../../styles/navButton.css';

export default function GetStartedButton({ href, text, className }) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Link href={href} className="nav-button w-[140.2px]">
        {text}
        <FiArrowRight className="ml-2 h-[18px]" />
      </Link>
    </div>
  );
}