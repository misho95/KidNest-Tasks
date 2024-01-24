import menu from "../../assets/ic-menu-item.png";
import logo from "../../assets/logo.png";
import geo from "../../assets/Flag_of_Georgia 1.png";

const HeaderMobile = () => {
  return (
    <header className="flex justify-between p-[15.5px] items-center">
      <img src={menu} className="size-[20px]" />
      <img src={logo} />
      <img src={geo} className="w-[33px] h-[22px]" />
    </header>
  );
};

export default HeaderMobile;
