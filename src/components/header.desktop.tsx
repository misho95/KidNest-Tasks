import logo from "../assets/logo.png";
import geo from "../assets/Flag_of_Georgia 1.png";
import bell from "../assets/ic-bell.png";
import settings from "../assets/ic-settings.png";
import user from "../assets/ic-user-group.png";
import avatar from "../assets/avatar.png";
import search from "../assets/ic-eva_search-fill.png";

const HeaderDesktop = () => {
  return (
    <header className="p-[21px] flex justify-between items-center">
      <div className="w-[326px]">
        <img src={logo} className="w-[130px] h-[40px]" />
      </div>
      <div className="w-full">
        <img src={search} />
      </div>
      <nav className="flex gap-[5px] items-center w-[232px]">
        <img src={geo} className="size-[24px]" />
        <img src={bell} className="size-[24px]" />
        <img src={settings} className="size-[24px]" />
        <img src={user} className="size-[24px]" />
        <img src={avatar} className="rounded-full size-[36px]" />
      </nav>
    </header>
  );
};

export default HeaderDesktop;
