import { ReactElement } from "react";
import logoVertical from "../../../assets/img/logo-vertical.svg";
import styles from "./LogoVertical.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LogoVertical = (): ReactElement => {
  return (
    <img
      src={logoVertical}
      className={cx("logo")}
      alt="Logo of the page with app name and food bowl"
    />
  );
};

export default LogoVertical;
