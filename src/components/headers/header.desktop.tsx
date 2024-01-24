import logo from "../../assets/logo.png";
import geo from "../../assets/Flag_of_Georgia 1.png";
import bell from "../../assets/ic-bell.png";
import settings from "../../assets/ic-settings.png";
import user from "../../assets/ic-user-group.png";
import avatar from "../../assets/avatar.png";
import search from "../../assets/ic-eva_search-fill.png";

const HeaderDesktop = () => {
  return (
    <header className="py-[21px] px-[32px] h-[81] flex justify-between items-center">
      <div className="w-[326px]">
        <a href="/">
          <img src={logo} className="w-[130px] h-[40px]" />
        </a>
      </div>
      <div className="w-full">
        <img src={search} />
      </div>
      <nav className="flex gap-[4px] items-center justify-center w-[232px]">
        <button className="size-[40px] flex justify-center items-center">
          <img src={geo} className="w-[33px] h-[22px]" />
        </button>
        <button className="size-[40px] flex justify-center items-center relative">
          <img src={bell} className="size-[24px]" />
          <div className="absolute -top-[1px] -right-[1px] bg-[#FF5630] size-[20px] rounded-full text-[12px] text-white flex justify-center items-center">
            1
          </div>
        </button>
        <button className="size-[40px] flex justify-center items-center">
          <img src={settings} className="size-[24px]" />
        </button>
        <button className="size-[40px] flex justify-center items-center">
          <img src={user} className="size-[24px]" />
        </button>
        <button className="size-[40px] flex justify-center items-center">
          <img src={avatar} className="rounded-full size-[36px]" />
        </button>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
