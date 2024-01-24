import logo from "../assets/logo.png";
import geo from "../assets/Flag_of_Georgia 1.png";
import bell from "../assets/ic-bell.png";
import settings from "../assets/ic-settings.png";
import user from "../assets/ic-user-group.png";
import avatar from "../assets/#Img_Avatar.25.png";

const Header = () => {
  return (
    <header className="p-[21px] flex justify-between items-center">
      <img src={logo} className="w-[130px] h-[40px]" />
      <nav className="flex gap-[5px]">
        <img src={geo} />
        <img src={bell} />
        <img src={settings} />
        <img src={user} />
        <img src={avatar} />
      </nav>
    </header>
  );
};

export default Header;
