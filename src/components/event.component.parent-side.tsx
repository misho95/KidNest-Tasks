import { useState } from "react";

type PropsType = {
  age: string;
  date: string;
  message: string;
  title: string;
  status: boolean;
};

const EventComponentParentSide = ({
  age,
  date,
  message,
  title,
  status,
}: PropsType) => {
  const [localStatus, setLocalStatus] = useState<boolean>(status);

  return (
    <article className="w-full sm:w-[528px] bg-white shadow-[0_12px_24px_-4px] shadow-[#919EAB1F] flex p-[24px]">
      <div className={`flex flex-col gap-[16px] `}>
        <div className="flex justify-between text-[12px]">
          <span className="bg-[#22C55E29] text-[#118D57] px-[6px] py-[2px] rounded-[6px]">
            {age}
          </span>
          <p className="text-[#919EAB]">{date}</p>
        </div>
        <h2>{title}</h2>
        <p className="text-[14px] text-[#919EAB]">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={() => setLocalStatus(!localStatus)}
            className={`text-[13px] px-[8px] py-[4px] rounded-[8px] text-white ${
              localStatus ? "bg-[#F8D063] " : "bg-[#212B36]"
            }`}
          >
            {localStatus ? "დადასტურებულია" : "დადასტურება"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default EventComponentParentSide;
