import addIcon from "../assets/add.png";
import backIcon from "../assets/back.png";
import EventComponent from "./event.component";
import useDeviceDetection from "../utils";
import { useState } from "react";
import AddModal from "./modal";
import EventComponentParentSide from "./event.component.parent-side";

const data = [
  {
    id: 1,
    age: "1-დან 2 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    title: "ღონისძიების დასახელება",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად და გელოდებით",
    status: true,
  },
  {
    id: 2,
    age: "3-დან 4 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    title: "ღონისძიების დასახელება",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად",
    status: false,
  },
  {
    id: 3,
    age: "0-დან 2 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    title: "ღონისძიების დასახელება",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად",
    status: false,
  },
  {
    id: 4,
    age: "ყველა ჯგუფი",
    date: "25 დეკ. 2023 13:00 PM",
    title: "ღონისძიების დასახელება",
    message:
      "ძვირფასო მშობლებო. მოგვივიდა შეტყობინება და ბაღი არ იფუნქციონირებს ოთხშაბათს. გთხოვთ გაითვალისწინოთ და ბავშვები არ მოიყვანოთ. ",
    status: false,
  },
];

const MainContent = () => {
  const device = useDeviceDetection();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[15px] justify-between items-start">
        <h2 className="text-[24px]">ღონისძიებები</h2>
        <div
          className={`flex ${
            device === "Mobile" ? "justify-between" : "justify-end"
          } items-center w-full`}
        >
          <button
            className={`text-[#919EAB] flex items-center justify-center ${
              device === "Mobile" ? "flex" : "hidden"
            }`}
          >
            <img src={backIcon} className="size-[24px]" />
            უკან
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="px-[12px] py-[6px] bg-[#212B36] rounded-[8px] flex justify-center items-center gap-[8px] text-white text-[14px]"
          >
            <img src={addIcon} className="size-[20px]" />
            ღონისძიების დამატება
          </button>
        </div>
      </div>
      <section className="flex flex-wrap gap-[25px] justify-end">
        {data.map((d) => {
          return (
            <EventComponent
              key={d.id}
              age={d.age}
              date={d.date}
              message={d.message}
              title={d.title}
            />
          );
        })}
        {data.map((d) => {
          return (
            <EventComponentParentSide
              key={d.id}
              age={d.age}
              date={d.date}
              message={d.message}
              title={d.title}
              status={d.status}
            />
          );
        })}
      </section>
      {modalOpen && <AddModal setModalOpen={setModalOpen} />}
    </main>
  );
};

export default MainContent;
