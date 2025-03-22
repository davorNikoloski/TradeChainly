"use client";

import { useState } from "react";

export default function PricingButton({ onSelect }) {
  const [selected, setSelected] = useState("Monthly");

  const handleSelect = (plan) => {
    setSelected(plan);
    if (onSelect) onSelect(plan);
  };

  return (
    <div className="w-full max-w-[320px] flex items-center justify-between p-3 rounded-[28px] bg-[linear-gradient(to_right,#010012,#1d1248)] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2),_inset_0px_-1px_2px_rgba(255,255,255,0.05)] transition-all duration-300 px-[1rem]">
      {["Monthly", "Annually"].map((plan) => (
        <label
          key={plan}
          className=" flex items-center justify-center gap-2 text-white font-medium cursor-pointer transition-all duration-300 relative"
        >
          <input
            type="radio"
            name="pricing"
            value={plan}
            checked={selected === plan}
            onChange={() => handleSelect(plan)}
            className="hidden"
          />
          <span
            className={`w-5 h-5 flex items-center justify-center border border-white/40 rounded-full transition-all duration-300 ${
              selected === plan
                ? "border-[#7A4BFA] shadow-[0px_0px_8px_#7A4BFA]"
                : "bg-transparent"
            }`}
          >
            {selected === plan && (
              <span className="w-2.5 h-2.5 bg-[#7A4BFA] rounded-full shadow-[0px_0px_6px_#7A4BFA]"></span>
            )}
          </span>
          {plan}
          {plan === "Annually" && (
            <span className="text-[#946dff] text-sm ml-2">Save 20%</span>
          )}
        </label>
      ))}
    </div>
  );
}