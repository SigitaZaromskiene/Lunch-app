import { ReactElement } from 'react';
import FoodMenuIcon from '../../../assets/img/menu-icon.svg';
import ForkKnifeIcon from '../../../assets/img/fork-knife-icon.svg';
import StarIcon from '../../../assets/img/star-icon.svg';
import OrderIcon from '../../../assets/img/order-icon.svg';

type NavBtnProps = {
  fullNav: boolean;
};

const NavBtn = ({ fullNav }: NavBtnProps): ReactElement => {
  return (
    <div className="nav__list">
      <a
        href="#"
        className={fullNav === true ? "nav-btn__expanded" : "nav-btn__collapsed"}
      >
        <img src={FoodMenuIcon} alt="Food Menu Icon" />
        <p className="nav__list-title">Food Menu</p>
      </a>
      <a
        href="#"
        className={fullNav === true ? "nav-btn__expanded" : "nav-btn__collapsed"}
      >
        <img src={ForkKnifeIcon} alt="Fork and Knife Icon" />
        <p className="nav__list-title">Available lunch</p>
      </a>
      <a
        href="#"
        className={fullNav === true ? "nav-btn__expanded" : "nav-btn__collapsed"}
      >
        <img src={OrderIcon} alt="Menu Icon" />
        <p className="nav__list-title">Your orders</p>
      </a>
      <a
        href="#"
        className={fullNav === true ? "nav-btn__expanded" : "nav-btn__collapsed"}
      >
        <img src={StarIcon} alt="Food Menu Icon" />
        <p className="nav__list-title">Ratings</p>
      </a>
    </div>
  );
};

export default NavBtn;
