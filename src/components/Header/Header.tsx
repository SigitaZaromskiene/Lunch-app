import { ReactElement } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx  = classNames.bind(styles)

const Header =():ReactElement=>{
    return (
        <div className={cx('header')}>
        <div >
        <h1>Lunch Menu</h1>
        <h4 className={cx('header__secondary')}>Lunch menu for the week of </h4>
        </div>
        <ul className={cx('header__list')}>
        <li><button className={cx('header__button')}>Monday</button></li>
        <li><button className={cx('header__button')}>Tuesday</button></li>
        <li><button className={cx('header__button')}>Wednesday</button></li>
        <li><button className={cx('header__button')}>Thursday</button></li>
        <li><button className={cx('header__button')}>Friday</button></li>
        </ul>
        <div className={cx('header__border')}></div>
        </div>
    )
}
export default Header