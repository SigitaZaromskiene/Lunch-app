import React from "react";
import mealsData from "../../../../data/db.json";
import ramen from "../../../assets/img/MenuListImg/Ramen.svg";
import hamburger from "../../../assets/img/MenuListImg/HamburgerFries.svg";
import fries from "../../../assets/img/MenuListImg/Fries.svg";
import pizza from "../../../assets/img/MenuListImg/Pizza.svg";
import pretzel from "../../../assets/img/MenuListImg/Pretzel.svg";
import soup from "../../../assets/img/MenuListImg/Soup.svg";
import sandwich from "../../../assets/img/MenuListImg/Sandwich.svg";
import kebab from "../../../assets/img/MenuListImg/Kebab.svg";
import chicken from "../../../assets/img/MenuListImg/Chicken.svg";
import MenuListDescription from "./MenuListDescribtion";
import MenuListAddToCart from "./MenuListAddToCart";

const { meals } = mealsData;

export type MealProps = {
  id: number;
  title: string;
  description: string;
  vegetarian: boolean;
  spicy: boolean;
  price: number;
};

const selectMenuImg = (description: string): JSX.Element | null => {
  switch (true) {
    case description.toLowerCase().includes("ramen"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={ramen}
          alt={description}
        />
      );
    case description.toLowerCase().includes("hamburger"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={hamburger}
          alt={description}
        />
      );
    case description.toLowerCase().includes("fries"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={fries}
          alt={description}
        />
      );
    case description.toLowerCase().includes("pizza"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={pizza}
          alt={description}
        />
      );
    case description.toLowerCase().includes("pretzel"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={pretzel}
          alt={description}
        />
      );
    case description.toLowerCase().includes("soup"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={soup}
          alt={description}
        />
      );
    case description.toLowerCase().includes("sandwich"):
      return (
        <img
          className="menu-list__item__header-img"
          src={sandwich}
          alt={description}
        />
      );
    case description.toLowerCase().includes("wrap"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={kebab}
          alt={description}
        />
      );
    case description.toLowerCase().includes("chicken"):
      return (
        <img
          className="menu-list__item__header-img-container-img"
          src={chicken}
          alt={description}
        />
      );
    default:
      return null;
  }
};

const MenuHeader: React.FC = () => {
  return (
    <>
      {meals.map((meal: MealProps) => (
        <li key={meal.id} className="menu-list__item">
          <div className="menu-list__item__header">
            <div className="menu-list__item__header-image">
              {" "}
              {selectMenuImg(meal.description)}
            </div>
            <div className="menu-list__item__header-img-container"></div>
            <div className="menu-list__item__header-text">
              {meal.title}
              <div className="menu-list__item__header-text-icon">
                {meal.vegetarian && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="menu-list__item__header-text-icon-veg"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.257 14.1629C18.3578 14.7094 17.3251 14.9969 16.2729 14.9935C15.3914 14.9865 14.5199 14.8062 13.7079 14.4629C13.0821 15.3463 12.7472 16.4028 12.7498 17.4854V20.2501C12.75 20.3529 12.7291 20.4546 12.6883 20.549C12.6476 20.6434 12.5878 20.7284 12.5129 20.7988C12.4379 20.8691 12.3492 20.9233 12.2524 20.9579C12.1556 20.9925 12.0527 21.0069 11.9501 21.0001C11.7573 20.9833 11.578 20.8942 11.4481 20.7508C11.3183 20.6074 11.2474 20.4201 11.2498 20.2266V19.0604L7.62917 15.4397C7.09095 15.6405 6.52173 15.7456 5.94729 15.7501C5.15648 15.752 4.38048 15.5356 3.70479 15.1247C1.66198 13.8835 0.562291 11.0269 0.775103 7.48037C0.785818 7.29689 0.863535 7.12373 0.993497 6.99376C1.12346 6.8638 1.29662 6.78608 1.4801 6.77537C5.02667 6.56631 7.88323 7.66224 9.12073 9.70506C9.60693 10.5058 9.81919 11.443 9.72542 12.3751C9.71959 12.4473 9.69296 12.5163 9.64876 12.5737C9.60456 12.6311 9.54468 12.6744 9.47636 12.6985C9.40803 12.7226 9.33419 12.7264 9.26376 12.7094C9.19333 12.6925 9.12932 12.6554 9.07948 12.6029L7.27948 10.7185C7.13768 10.5838 6.94887 10.5098 6.7533 10.5123C6.55773 10.5148 6.37087 10.5936 6.23257 10.7319C6.09427 10.8702 6.01546 11.0571 6.01296 11.2526C6.01046 11.4482 6.08445 11.637 6.21917 11.7788L11.2704 16.9585C11.276 16.8854 11.2826 16.8122 11.2901 16.7401C11.4541 15.3495 12.0677 14.0506 13.0376 13.0407L17.7804 8.02881C17.9211 7.8882 18.0003 7.69745 18.0003 7.49851C18.0004 7.29958 17.9215 7.10876 17.7809 6.96803C17.6403 6.8273 17.4495 6.74819 17.2506 6.7481C17.0517 6.74801 16.8608 6.82695 16.7201 6.96756L12.1264 11.8257C12.0804 11.8744 12.0222 11.9099 11.9578 11.9285C11.8935 11.9471 11.8253 11.9481 11.7605 11.9315C11.6956 11.9148 11.6363 11.8811 11.5889 11.8338C11.5415 11.7865 11.5076 11.7274 11.4907 11.6626C11.0464 10.0238 11.2423 8.39256 12.0907 6.99193C13.7651 4.22818 17.6614 2.74881 22.5139 3.03381C22.6973 3.04452 22.8705 3.12224 23.0005 3.2522C23.1304 3.38216 23.2081 3.55533 23.2189 3.73881C23.5001 8.59225 22.0207 12.4885 19.257 14.1629Z"
                      fill="#0D1F2E"
                    />
                    <title>Vegetarian food icon</title>
                  </svg>
                )}
                {meal.spicy && (
                  <svg
                    width="8"
                    height="20"
                    viewBox="0 0 8 20"
                    className="menu-list__item__header-text-icon-spicy"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8V20C8 20 0 18 0 9V8C0 7.27 0.4 6.63 1 6.28L2.25 7L4 6L5.75 7L7 6.28C7.6 6.63 8 7.27 8 8ZM4 4.5L5.75 5.5L7.27 4.63C6.72 3.66 5.91 2.94 4.97 2.65C4.88527 1.92126 4.5361 1.24894 3.98868 0.760497C3.44126 0.272058 2.73365 0.00145807 2 0V2C2.44 2 2.8 2.29 2.94 2.69C2.03 3 1.26 3.7 0.729999 4.63L2.25 5.5L4 4.5Z"
                      fill="#0D1F2E"
                    />
                    <title>Spicy food icon</title>
                  </svg>
                )}
              </div>
            </div>
          </div>
          <MenuListDescription
            description={meal.description}
            mealId={meal.id}
          />
          <MenuListAddToCart price={meal.price} />
        </li>
      ))}
    </>
  );
};

export default MenuHeader;
