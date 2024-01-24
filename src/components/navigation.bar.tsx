import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const NavigationBar = () => {
  return (
    <nav className="w-[248px] text-[#999999] flex flex-col justify-between">
      <div>
        <h4 className="h-[42px] text-[12px] flex items-center">Overview</h4>
        <div className="text-[14px]">
          <a href="#" className="flex gap-[16px] items-center h-[44px]">
            <img src={icon1} /> ანალიტიკა
          </a>
          <a href="#" className="flex gap-[16px] items-center h-[44px]">
            <img src={icon2} /> ფინანსები
          </a>
          <a href="#" className="flex gap-[16px] items-center h-[44px]">
            <img src={icon3} /> ფაილი
          </a>
        </div>
      </div>
      <button className="text-[#FF5630] w-[240px] h-[40px] shadow-md rounded-lg">
        გასვლა
      </button>
    </nav>
  );
};

export default NavigationBar;
