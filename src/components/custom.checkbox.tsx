import { useState } from "react";
import checkbox from "../assets/ic-checkbox-on.png";

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
          checked ? "border-0" : "bg-white border-[1px]"
        }`}
      >
        {checked && <img src={checkbox} className="size-[20px]" />}
      </div>
    </label>
  );
};

export default CustomCheckbox;
