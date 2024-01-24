import addIcon from "../assets/add.png";
import coverImage from "../assets/cover_img.png";
import avatar2 from "../assets/Avatar2.png";
import backIcon from "../assets/back.png";
import EventComponentDesktop from "./event.component.desktop";
import useDeviceDetection from "../utils";
import EventComponentMobile from "./event.component.mobile";

const data = [
  {
    id: 1,
    age: "1-დან 2 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად და გელოდებით",
    img: null,
    author: {
      avatar: "",
    },
  },
  {
    id: 2,
    age: "3-დან 4 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად",
    img: coverImage,
    author: {
      avatar: avatar2,
    },
  },
  {
    id: 3,
    age: "0-დან 2 წლამდე",
    date: "25 დეკ. 2023 13:00 PM",
    message:
      "ძვირფასო მშობლებო. პარასკევს გვექნება საახალწლო ზეიმი. გთხოვთ ბავშვებს ჩააცვათ შესაბამისად",
    img: coverImage,
    author: {
      avatar: avatar2,
    },
  },
  {
    id: 4,
    age: "ყველა ჯგუფი",
    date: "25 დეკ. 2023 13:00 PM",
    message:
      "ძვირფასო მშობლებო. მოგვივიდა შეტყობინება და ბაღი არ იფუნქციონირებს ოთხშაბათს. გთხოვთ გაითვალისწინოთ და ბავშვები არ მოიყვანოთ. ",
    img: null,
    author: {
      avatar: "",
    },
  },
];

const MainContent = () => {
  const device = useDeviceDetection();

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
          <button className="px-[12px] py-[6px] bg-[#212B36] rounded-[8px] flex justify-center items-center gap-[8px] text-white text-[14px]">
            <img src={addIcon} className="size-[20px]" />
            ღონისძიების დამატება
          </button>
        </div>
      </div>
      <section className="flex flex-wrap gap-[25px] justify-end">
        {data.map((d) => {
          return device === "Mobile" ? (
            <EventComponentMobile
              key={d.id}
              age={d.age}
              date={d.date}
              message={d.message}
              img={d.img}
              author={d.author}
            />
          ) : (
            <EventComponentDesktop
              key={d.id}
              age={d.age}
              date={d.date}
              message={d.message}
              img={d.img}
              author={d.author}
            />
          );
        })}
      </section>
    </main>
  );
};

export default MainContent;
