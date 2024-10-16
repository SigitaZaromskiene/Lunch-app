import { ReactElement } from "react";
import MenuList from "./MenuList";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Header from "../Header";

const cx = classNames.bind(styles);

const Menu = (): ReactElement => {
  return (
    <div className={cx("main")}>
    <Header/>
    <div className={cx("menu")}>
      <MenuList />
    </div>
    </div>
    
  );
};
export default Menu;
