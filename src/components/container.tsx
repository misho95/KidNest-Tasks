import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Container = ({ children }: PropsType) => {
  return (
    <main className="flex min-h-[calc(100dvh-81px)] px-[32px]">{children}</main>
  );
};

export default Container;
