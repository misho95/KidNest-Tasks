import calendar from "../assets/ic-solar_calendar-mark-bold-duotone.png";

const CustomDatePicker = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="დაწყება"
        className="w-[324px] h-[54px] border-[1px] border-[#919EAB33] rounded-[8px] py-[16px] px-[14px] text-[#919EAB] focus:outline-none"
      />
      <button className="absolute right-[14px] top-1/2 -translate-y-1/2">
        <img src={calendar} />
      </button>
    </div>
  );
};

export default CustomDatePicker;
