
import GetStartedButton from '../../buttons/GetStartedButton';
import CheckIconHolder from './CheckIconHolder';


export default function FeaturesLeftSection({ title, description, features }) {
    return (
      <div className="w-full h-full left-section flex items-center">
        <div className="flex flex-col">
          {/* Top Section */}
          <div className="top-sec flex flex-col gap-[16px] mt-[24px] mb-[32px]">
            <h1 className="text-[34px] font-[500] text-white">{title}</h1>
            <p className="text-[#9e9e9e] text-[16px] font-[400]">{description}</p>
            <GetStartedButton 
              href="/contact" 
              text="Get Started" 
              showArrow={true} 
              width="200px" 
            />
          </div>
  
          {/* Bottom Section - Features List */}
          <div className="bottom-sec flex flex-col gap-[12px]">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-row items-center gap-[6px]">
                <CheckIconHolder />
                <p className="text-[#9e9e9e] text-[16px] font-[400]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }