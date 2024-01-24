type PropsType = {
  age: string;
  date: string;
  message: string;
};

const EventComponent = ({ age, date, message }: PropsType) => {
  return (
    <article className="w-full sm:w-[528px] bg-white shadow-[0_12px_24px_-4px] shadow-[#919EAB1F] flex p-[24px]">
      <div className={`flex flex-col gap-[16px] `}>
        <div className="flex justify-between text-[12px]">
          <h3 className="bg-[#22C55E29] text-[#118D57] px-[6px] py-[2px] rounded-[6px]">
            {age}
          </h3>
          <p className="text-[#919EAB]">{date}</p>
        </div>
        <p className="text-[14px] text-[#212B36]">{message}</p>
      </div>
    </article>
  );
};

export default EventComponent;
