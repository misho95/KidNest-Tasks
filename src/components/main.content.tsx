import addIcon from "../assets/add.png";

const data = [
  {
    id: 1,
    age: "1-დან 2 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად და გელოდებით",
    img: null,
  },
  {
    id: 2,
    age: "3-დან 4 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად",
  },
];

const MainContent = () => {
  return (
    <main className="w-full">
      <div className="flex justify-between items-start h-[72px] mb-[72px]">
        <h2 className="text-[24px]">ღონისძიებები</h2>
        <button className="px-[12px] py-[6px] bg-[#212B36] rounded-[8px] flex justify-center items-center gap-[8px] text-white text-[14px] self-end">
          <img src={addIcon} className="size-[20px]" />
          ღონისძიების დამატება
        </button>
      </div>
      <section>
        <article className="w-[528px] bg-white p-[24px] flex flex-col gap-[16px] shadow-[0_12px_24px_-4px] shadow-[#919EAB1F]">
          <div className="flex justify-between text-[12px]">
            <h3 className="bg-[#22C55E29] text-[#118D57] px-[6px] py-[2px] rounded-[6px]">
              1-დან 2 წლამდე
            </h3>
            <p className="text-[#919EAB]">25 დეკ. 2023 13:00 PM</p>
          </div>
          <p className="text-[14px] text-[#212B36]">
            ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ
            ბავშვებს ჩააცვათ შესაბამისად და გელოდებით
          </p>
        </article>
      </section>
    </main>
  );
};

export default MainContent;
