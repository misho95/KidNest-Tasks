import Container from "./components/container";
import HeaderDesktop from "./components/headers/header.desktop";
import HeaderMobile from "./components/headers/header.mobile";
import NavigationBar from "./components/navigation.bar";
import useDeviceDetection from "./utils";

function App() {
  const device = useDeviceDetection();

  return (
    <>
      {device !== "Mobile" ? <HeaderDesktop /> : <HeaderMobile />}
      <Container>
        <NavigationBar />
      </Container>
    </>
  );
}

export default App;
