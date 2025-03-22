import "../../styles/firstButtonComponent.css"; 
import { HiOutlineChevronRight } from 'react-icons/hi';

export default function HeroButton({ leftText, rightText }) {
    return (
      <a href="#" className="hero-button w-fit md:min-w-[269px] p-[16px] flex items-center ">
        <div className="btn-left rounded-[40px] custom-btn-left w-[110px] h-[35.6px] flex items-center justify-center font-inter text-[120px]">
            <p className="text-[12px] md:text-[15px]">
              {leftText}
            </p>
        </div>
        <div className="btn-right flex items-center justify-center font-inter text-[12px] md:text-[15px]">
            {rightText}
            <HiOutlineChevronRight className="ml-2" />
        </div>
      </a>
    );
}