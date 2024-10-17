import { ReactElement } from "react";
import MenuList from "./MenuList";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Header from "../Header";
import Search from "../Search";

const cx = classNames.bind(styles);

const Menu = (): ReactElement => {
  return (
    <div className={cx("main")}>
    <Header/>
    <Search/>
    <div className={cx("menu")}>
      <MenuList />
    </div>
    </div>
    
  );
};
export default Menu;
