import logo from '../../../assets/img/logo.svg';
import { ReactElement } from 'react';
import styles from "./LogoHorizontal.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LogoHorizontal = (): ReactElement => {
  return (
    <img
      src={logo}
      className={cx("logo")}
      alt="Logo of the page with app name and food bowl"
    />
  );
};

export default LogoHorizontal;