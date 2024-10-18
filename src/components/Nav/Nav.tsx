import Logo from '../Logo';
import NavBtn from '../Buttons/NavBtn';
import ArrowBtn from '../Buttons/ArrowBtn';
import { useState, ReactElement } from 'react';

const Nav = (): ReactElement => {
  const [fullNav, setFullNav] = useState<boolean>(true);

  function navWidthHandler() {
    setFullNav((prev) => !prev);
  }

  return (
    <nav className={fullNav ? 'nav' : 'nav-collapsed'}>
      <Logo isVertical={fullNav} />
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
