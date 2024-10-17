import { ReactElement } from 'react';
import { selectMenuImg } from '../../../helpers/selectMenuImg';
import MenuListDescription from './MenuListDescribtion';
import MenuListAddToCart from './MenuListAddToCart';
import spicyIcon from '../../../assets/img/spicy.svg';
import veggetarianIcon from '../../../assets/img/vegetarian.svg';
import styles from './MenuList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type MealProps = {
  id: number;
  title: string;
  dishType: string;
  description: string;
  vegetarian: boolean;
  spicy: boolean;
  price: number;
};

type FilteredMealsProps = {
  filteredMeals: MealProps[];
};

const MenuHeader = ({ filteredMeals }: FilteredMealsProps): ReactElement => {
  return (
    <>
      {' '}
      {filteredMeals.length == 0 && (
        <p>Nothing found in this shop.</p>
      )}
      {filteredMeals.map((meal: MealProps) => (
        <li key={meal.id} className={cx('menu-list')}>
          <div className={cx('menu-list__header')}>
            <div className={cx('menu-list__image')}>
              {selectMenuImg(meal.dishType)}
            </div>
            <div className={cx('menu-list__container')}></div>
            <div className={cx('menu-list__text')}>
              {meal.title}
              <div className={cx('menu-list__text-icon')}>
                {meal.vegetarian && (
                  <img src={veggetarianIcon} alt="Vegetarian food icon" />
                )}
                {meal.spicy && <img src={spicyIcon} alt="Spicy food icon" />}
                {!meal.spicy && !meal.vegetarian && (
                  <div className={cx('menu-list__empty-space')}></div>
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
