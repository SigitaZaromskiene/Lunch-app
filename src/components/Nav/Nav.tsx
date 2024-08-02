import LogoHorizontal from "../../containers/Logo/LogoHorizontal";
import NavBtn from "../../containers/Buttons/NavBtn";
import ArrowBtn from "../../containers/Buttons/ArrowBtn";
import LogoVertical from "../../containers/Logo/LogoVertical";
import { useState } from "react";

const Nav: React.FC = () => {
  // might take this logic to useContext
  const [fullNav, setFullNav] = useState<boolean>(true);

  function navWidthHandler() {
    setFullNav((prev) => !prev);
  }

  return (
    <nav className={fullNav ? "nav" : "nav-colapsed"}>
      {fullNav ? <LogoHorizontal /> : <LogoVertical />}
      <NavBtn fullNav={fullNav} />
      <ArrowBtn fullNav={fullNav} navWidthHandler={navWidthHandler} />
    </nav>
  );
};

export default Nav;
