import { CheckCheck } from "lucide-react";

export default function CheckIconHolder() {
  return (
    <div className="flex justify-center items-center w-7 h-7 min-w-7 min-h-7 bg-[#7B4CFE] rounded-md shadow-inner">
      <div className="flex space-x-0.5">
        <CheckCheck className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}
