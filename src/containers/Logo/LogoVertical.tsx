import { ReactElement } from 'react';
import logoVertical from '../../assets/img/logo-vertical.svg';

const LogoVertical = (): ReactElement => {
  return (
    <img
      src={logoVertical}
      className="logo"
      alt="Logo of the page with app name and food bowl"
    />
  );
};

export default LogoVertical;
