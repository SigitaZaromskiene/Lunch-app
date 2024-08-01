import mealsData from "../../../data/db.json";
import ramen from "../../assets/img/MenuListImg/Ramen.svg";
import hamburger from "../../assets/img/MenuListImg/HamburgerFries.svg";
import fries from "../../assets/img/MenuListImg/Fries.svg";
import pizza from "../../assets/img/MenuListImg/Pizza.svg";
import pretzel from "../../assets/img/MenuListImg/Pretzel.svg";
import soup from "../../assets/img/MenuListImg/Soup.svg";
import sandwich from "../../assets/img/MenuListImg/Sandwich.svg";
import kebab from "../../assets/img/MenuListImg/Kebab.svg";
import chicken from "../../assets/img/MenuListImg/Chicken.svg";

const { meals } = mealsData;

const selectMenuImg = (description: string): JSX.Element | null => {
  switch (true) {
    case description.toLowerCase().includes("ramen"):
      return <img src={ramen} alt={description} />;
    case description.toLowerCase().includes("hamburger"):
      return <img src={hamburger} alt={description} />;
    case description.toLowerCase().includes("fries"):
      return <img src={fries} alt={description} />;
    case description.toLowerCase().includes("pizza"):
      return <img src={pizza} alt={description} />;
    case description.toLowerCase().includes("pretzel"):
      return <img src={pretzel} alt={description} />;
    case description.toLowerCase().includes("soup"):
      return <img src={soup} alt={description} />;
    case description.toLowerCase().includes("sandwich"):
      return <img src={sandwich} alt={description} />;
    case description.toLowerCase().includes("kebab"):
      return <img src={kebab} alt={description} />;
    case description.toLowerCase().includes("chicken"):
      return <img src={chicken} alt={description} />;
    default:
      return null;
  }
};

const MenuListImg: React.FC = () => {
  return (
    <>
      {meals.map((meal, i) => (
        <div key={i}>
          {selectMenuImg(meal.description)}
          
        </div>
      ))}
    </>
  );
};
export default MenuListImg;
