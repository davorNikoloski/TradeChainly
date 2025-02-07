import "../../styles/firstButtonComponent.css"; 
import { HiOutlineChevronRight } from 'react-icons/hi';

export default function HeroButton() {
    return (
      <a href="#" className="hero-button w-fit md:min-w-[269px] p-[16px] flex items-center ">
        <div className="btn-left rounded-[40px] custom-btn-left w-[110px] h-[35.6px] flex items-center justify-center font-inter text-[120px]">
            <p className="text-[12px] md:text-[15px]">
              Whats New
            </p>
        </div>
        <div className="btn-right flex items-center justify-center font-inter text-[12px] md:text-[15px]">
            Ease Update v1.0
            <HiOutlineChevronRight className="ml-2" />
        </div>
      </a>
    );
}
