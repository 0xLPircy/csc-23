import AboutUs from "./containers/AboutUs";
import CyberSec from "./containers/CyberSec";
import Header from "./containers/Header";

export default function Home() {
  return (
    <>
      <div className="pt-12">
        <Header />
        <div className="pageSeparator"></div>
        <AboutUs />
        <div className="pageSeparator"></div>
        <CyberSec />
      </div>
    </>
  );
}
