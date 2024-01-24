import HeaderDesktop from "./components/header.desktop";
import useDeviceDetection from "./utils";

function App() {
  const device = useDeviceDetection();

  return <>{device !== "Mobile" ? <HeaderDesktop /> : "mobile"}</>;
}

export default App;
