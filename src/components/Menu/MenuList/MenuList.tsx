import { ReactElement } from 'react';
import mealsData from '../../../../data/db.json';
import { selectMenuImg } from '../../../helpers/selectMenuImg';
import MenuListDescription from './MenuListDescribtion';
import MenuListAddToCart from './MenuListAddToCart';
import spicyIcon from '../../../assets/img/spicy.svg';
import veggetarianIcon from '../../../assets/img/vegetarian.svg';
import styles from './MenuList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const { meals } = mealsData;

export type MealProps = {
  id: number;
  title: string;
  description: string;
  vegetarian: boolean;
  spicy: boolean;
  price: number;
};

const MenuHeader = (): ReactElement => {
  return (
    <>
      {meals.map((meal: MealProps) => (
        <li key={meal.id} className={cx('menu-list')}>
          <div className={cx('menu-list-header')}>
            <div className={cx('menu-list-header__image')}>
              {selectMenuImg(meal.title)}
            </div>
            <div className={cx('menu-list-header__img-container')}></div>
            <h1 className={cx('menu-list-header__text')}>
              {meal.title}
              <div className={cx('menu-list-header__text-icon')}>
                {meal.vegetarian && (
                  <img src={veggetarianIcon} alt="Vegetarian food icon" />
                )}
                {meal.spicy && <img src={spicyIcon} alt="Spicy food icon" />}
                {!meal.spicy && !meal.vegetarian && <p>&nbsp;</p>}
              </div>
            </h1>
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
