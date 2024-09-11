import LogoHorizontal from '../../containers/Logo/LogoHorizontal';
import NavBtn from '../Buttons/NavBtn';
import ArrowBtn from '../Buttons/ArrowBtn';
import LogoVertical from '../../containers/Logo/LogoVertical';
import { useState } from 'react';
import { ReactElement } from 'react';

const Nav = (): ReactElement => {
  // might take this logic to useContext
  const [fullNav, setFullNav] = useState<boolean>(true);

  function navWidthHandler() {
    setFullNav((prev) => !prev);
  }

  return (
    <nav className={fullNav ? 'nav' : 'nav-colapsed'}>
      {fullNav ? <LogoHorizontal /> : <LogoVertical />}
      <NavBtn fullNav={fullNav} />
      <ArrowBtn
        className="arrow"
        fullNav={fullNav}
        navWidthHandler={navWidthHandler}
      />
    </nav>
  );
};

export default Nav;
