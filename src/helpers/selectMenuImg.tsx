import ramen from "../assets/img/MenuListImg/Ramen.svg";
import hamburger from "../assets/img/MenuListImg/HamburgerFries.svg";
import fries from "../assets/img/MenuListImg/Fries.svg";
import pizza from "../assets/img/MenuListImg/Pizza.svg";
import pretzel from "../assets/img/MenuListImg/Pretzel.svg";
import soup from "../assets/img/MenuListImg/Soup.svg";
import sandwich from "../assets/img/MenuListImg/Sandwich.svg";
import kebab from "../assets/img/MenuListImg/Kebab.svg";
import chicken from "../assets/img/MenuListImg/Chicken.svg";

export const selectMenuImg = (dishType: string): JSX.Element | null => {
  switch (true) {
    case dishType ==="bowl":
      return (
        <img
          className="menu-list__image"
          src={ramen}
          alt={dishType}
        />
      );
    case dishType ==="hamburger":
      return (
        <img
          className="menu-list__image"
          src={hamburger}
          alt={dishType}
        />
      );
    case dishType ==="fries":
      return (
        <img
          className="menu-list__image"
          src={fries}
          alt={dishType}
        />
      );
    case dishType ==="pizza":
      return (
        <img
          className="menu-list__image"
          src={pizza}
          alt={dishType}
        />
      );
    case dishType ==="pretzel":
      return (
        <img
          className="menu-list-header__img"
          src={pretzel}
          alt={dishType}
        />
      );
    case dishType ==="soup":
      return (
        <img
          className="menu-list__image"
          src={soup}
          alt={dishType}
        />
      );
    case dishType ==="sandwich":
      return (
        <img
          className="menu-list__image"
          src={sandwich}
          alt={dishType}
        />
      );
    case dishType ==="wrap":
      return (
        <img
          className="menu-list__image"
          src={kebab}
          alt={dishType}
        />
      );
    case dishType ==="chicken":
      return (
        <img
          className="menu-list__image"
          src={chicken}
          alt={dishType}
        />
      );
    default:
      return null;
  }
};
