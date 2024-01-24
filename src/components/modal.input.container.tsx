import { ReactNode } from "react";

type PropsType = {
  title: string;
  children: ReactNode;
  label?: boolean;
};

const ModalInputContainer = ({ title, children, label = true }: PropsType) => {
  return label ? (
    <label className="flex flex-col gap-[12px]">
      <div className="text-[14px] text-[#212B36]">{title}</div>
      {children}
    </label>
  ) : (
    <div className="flex flex-col gap-[12px]">
      <div className="text-[14px] text-[#212B36] select-none">{title}</div>
      {children}
    </div>
  );
};

export default ModalInputContainer;
