import { ReactElement } from "react";
import MenuList from "./MenuList";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Menu = (): ReactElement => {
  return (
    <ul className={cx("menu-container")}>
      <MenuList />
    </ul>
  );
};
export default Menu;
