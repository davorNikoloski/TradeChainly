"use client";

import { useState } from "react";

export default function PricingButton({ onSelect }) {
  const [selected, setSelected] = useState("Monthly");

  const handleSelect = (plan) => {
    setSelected(plan);
    if (onSelect) onSelect(plan);
  };

  return (
    <div className="w-full max-w-[320px] flex items-center justify-between p-3 rounded-[28px] bg-gradient-to-r from-[#010012] via-[#2E0A63] to-[#7A4BFA]">
      <label className="flex-1 flex items-center justify-center gap-2 text-white font-medium cursor-pointer">
        <input type="radio" name="pricing" value="Monthly" checked={selected === "Monthly"} onChange={() => handleSelect("Monthly")} className="hidden" />
        <span className={`w-5 h-5 flex items-center justify-center border border-white/40 rounded-full ${selected === "Monthly" ? "bg-transparent" : ""}`}>
          {selected === "Monthly" && <span className="w-2.5 h-2.5 bg-[#7A4BFA] rounded-full"></span>}
        </span>
        Monthly
      </label>

      <label className="flex-1 flex items-center justify-center gap-2 text-white font-medium cursor-pointer">
        <input type="radio" name="pricing" value="Annually" checked={selected === "Annually"} onChange={() => handleSelect("Annually")} className="hidden" />
        <span className={`w-5 h-5 flex items-center justify-center border border-white/40 rounded-full ${selected === "Annually" ? "bg-transparent" : ""}`}>
          {selected === "Annually" && <span className="w-2.5 h-2.5 bg-[#7A4BFA] rounded-full"></span>}
        </span>
        Annually
      </label>
    </div>
  );
}
