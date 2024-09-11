import logo from '../../assets/img/logo.svg';
import { ReactElement } from 'react';

const LogoHorizontal = (): ReactElement => {
  return (
    <img
      src={logo}
      className="logo"
      alt="Logo of the page with app name and food bowl"
    />
  );
};

export default LogoHorizontal;
