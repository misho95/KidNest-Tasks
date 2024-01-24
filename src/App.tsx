import HeaderDesktop from "./components/header.desktop";
import HeaderMobile from "./components/header.mobile";
import useDeviceDetection from "./utils";

function App() {
  const device = useDeviceDetection();

  return <>{device !== "Mobile" ? <HeaderDesktop /> : <HeaderMobile />}</>;
}

export default App;
