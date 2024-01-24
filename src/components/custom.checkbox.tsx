import { useState } from "react";
import vector from "../assets/Vector.png";

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="relative">
      <input
        onChange={() => setChecked(!checked)}
        className="w-full h-full absolute opacity-0"
        type="checkbox"
        checked={checked}
      />
      <div
        className={`size-[20px] rounded-[8px] flex justify-center items-center ${
          checked ? "bg-[#FFCC5C]" : "bg-white border-[1px]"
        }`}
      >
        {checked && <img src={vector} className="size-[16px]" />}
      </div>
      <div>checkbox</div>
    </label>
  );
};

export default CustomCheckbox;
