import Link from "next/link";
import { CgProfile } from "react-icons/cg";

import "../../styles/LogInButton.css";

export default function LogInButton({ href, text, width = "140.2px" }) {
  return (
    <div className="flex items-center space-x-4">
      <Link 
        href="https://app.tradechainly.website/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`login-btn flex items-center justify-center w-[${width}] px-4 py-2`}
      >
        <CgProfile className="mr-[6px] h-[18px] w-[18px]" />
        {text}
      </Link>
    </div>
  );
}
