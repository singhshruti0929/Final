import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./Mobile-Components/MobileNav";
import CenterImage from "./components/CenterImage";
import ThirdSection from "./components/ThirdSection";
import MobileThirdSection from "./Mobile-Components/ThirdSection";
import FourthSection from "./components/FourthSection";
import MobileFourthSection from "./Mobile-Components/FourthSection";
import FifthSection from "./components/FifthSection";
import MobileFifthSection from "./Mobile-Components/FifthSection";
import SixSection from "./components/SixthSection";
import MobileSixthSection from "./Mobile-Components/SixthSection";
import SevenSection from "./components/SeventhSection";
import EightSection from "./components/EightSection";
import MobileEIghtSection from "./Mobile-Components/EightSection";
import NinthSection from "./components/NinthSection";
import MobileNineSection from "./Mobile-Components/NinthSection";
import TenthSection from "./components/TenthSection";
import MobileTenthSection from "./Mobile-Components/TenthSection";
import Copyright from "./components/Copyright";

const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
      <div className="App">
        <Navbar />
        <CenterImage />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixSection />
        <SevenSection />
        <EightSection />
        <NinthSection />
        <TenthSection />
        <Copyright />
      </div>
    );
  }
  return (
    <div>
      <MobileNav />
      <CenterImage />
      <MobileThirdSection />
      <MobileFourthSection />
      <MobileFifthSection />
      <MobileSixthSection />
      <MobileEIghtSection />
      <MobileNineSection />
      <MobileTenthSection />
    </div>
  );
};

export default App;
