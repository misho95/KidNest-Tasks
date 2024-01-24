import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Container = ({ children }: PropsType) => {
  return (
    <div className="flex sm:min-h-[calc(100dvh-81px)] px-[32px] py-[22px]">
      {children}
    </div>
  );
};

export default Container;
