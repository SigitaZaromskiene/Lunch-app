import ramen from "../assets/img/MenuListImg/Ramen.svg";
import hamburger from "../assets/img/MenuListImg/HamburgerFries.svg";
import fries from "../assets/img/MenuListImg/Fries.svg";
import pizza from "../assets/img/MenuListImg/Pizza.svg";
import pretzel from "../assets/img/MenuListImg/Pretzel.svg";
import soup from "../assets/img/MenuListImg/Soup.svg";
import sandwich from "../assets/img/MenuListImg/Sandwich.svg";
import kebab from "../assets/img/MenuListImg/Kebab.svg";
import chicken from "../assets/img/MenuListImg/Chicken.svg";

export const selectMenuImg = (title: string): JSX.Element | null => {
  switch (true) {
    case title.toLowerCase().includes("bowl"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={ramen}
          alt={title}
        />
      );
    case title.toLowerCase().includes("hamburger"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={hamburger}
          alt={title}
        />
      );
    case title.toLowerCase().includes("fries"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={fries}
          alt={title}
        />
      );
    case title.toLowerCase().includes("pizza"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={pizza}
          alt={title}
        />
      );
    case title.toLowerCase().includes("pretzel"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={pretzel}
          alt={title}
        />
      );
    case title.toLowerCase().includes("soup"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={soup}
          alt={title}
        />
      );
    case title.toLowerCase().includes("sandwich"):
      return (
        <img
          className="menu-list__item__header-img"
          src={sandwich}
          alt={title}
        />
      );
    case title.toLowerCase().includes("wrap"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={kebab}
          alt={title}
        />
      );
    case title.toLowerCase().includes("chicken"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={chicken}
          alt={title}
        />
      );
    default:
      return null;
  }
};
