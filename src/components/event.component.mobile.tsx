type AuthorType = {
  avatar: string;
};

type PropsType = {
  age: string;
  date: string;
  message: string;
  img: string | null | undefined;
  author: AuthorType;
};

const EventComponentMobile = ({
  age,
  date,
  message,
  img,
  author,
}: PropsType) => {
  return (
    <article className="w-full bg-white shadow-[0_12px_24px_-4px] shadow-[#919EAB1F] flex flex-col sm:flex-row">
      {img && (
        <div className="p-[8px] w-full sm:w-[180px] relative">
          <img
            src={img}
            className="w-full h-[144px] rounded-[12px] object-cover"
          />
          <img
            src={author.avatar}
            className="size-[40px] absolute top-[16px] right-[16px]"
          />
        </div>
      )}
      <div
        className={`flex flex-col gap-[16px] ${
          img ? "w-[348px]" : "w-full"
        } p-[24px]`}
      >
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

export default EventComponentMobile;
