import React from 'react';
import mealsData from '../../../data/db.json';
import spicyIcon from "../../assets/img/spicy.svg"
import vegetarianIcon from "../../assets/img/vegetarian.svg"

const {meals} = mealsData

type Meal = {
  id: number;
  title: string;
  description: string;
  vegetarian: boolean;
  spicy: boolean;
};

const MenuHeader: React.FC = () => {
  return (
    <>
      {meals.map((meal: Meal) => (
        <div key={meal.id}>
          <p>{meal.title}</p>
          <header>{meal.title}</header>
          {meal.vegetarian && <img src={vegetarianIcon} alt="Suitable for vegetarians icon" />}
          {meal.spicy && <img src={spicyIcon} alt="Spicy food icon" />}
          <p>{meal.description}</p>
        </div>
      ))}
    </>
  );
};

export default MenuHeader;