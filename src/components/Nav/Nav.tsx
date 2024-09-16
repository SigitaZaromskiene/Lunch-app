import { ReactElement } from "react";
import LogoHorizontal from "../Logo/LogoHorizontal"
import NavBtn from "../Buttons/NavBtn";
import ArrowBtn from "../Buttons/ArrowBtn";
import LogoVertical from "../Logo/LogoVertical";
import { useState } from "react";

const Nav = (): ReactElement => {
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
