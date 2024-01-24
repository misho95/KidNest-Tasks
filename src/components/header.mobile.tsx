import menu from "../assets/ic-menu-item.png";
import logo from "../assets/logo.png";
import geo from "../assets/Flag_of_Georgia 1.png";

const HeaderMobile = () => {
  return (
    <header>
      <img src={menu} />
      <img src={logo} />
      <img src={geo} />
    </header>
  );
};

export default HeaderMobile;
