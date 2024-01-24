import Container from "./components/container";
import HeaderDesktop from "./components/headers/header.desktop";
import HeaderMobile from "./components/headers/header.mobile";
import MainContent from "./components/main.content";
import NavigationBar from "./components/navigation.bar";
import useDeviceDetection from "./utils";

function App() {
  const device = useDeviceDetection();

  return (
    <>
      {device !== "Mobile" ? <HeaderDesktop /> : <HeaderMobile />}
      <Container>
        {device !== "Mobile" ? <NavigationBar /> : null}
        <MainContent />
      </Container>
    </>
  );
}

export default App;
