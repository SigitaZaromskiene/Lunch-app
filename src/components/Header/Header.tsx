import { ReactElement } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { getCurrentWeekDate } from '../../helpers/getCurrentWeekDate';
import data from '../../../data/db.json';

const cx = classNames.bind(styles);

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

type HeaderProps = {
  setFilteredMeals: (meals: any[]) => void;
};

export const MealsSortByDay = (
  day: string,
  setFilteredMeals: (meals: any[]) => void
): void => {
  const meals = data.meals;
  const filteredMeals = meals.filter((meal) => meal.weekDays.includes(day));
  setFilteredMeals(filteredMeals);
};

const Header = ({ setFilteredMeals }: HeaderProps): ReactElement => {
  const handleDayClick = (day: string) => {
    MealsSortByDay(day, setFilteredMeals);
  };

  return (
    <div className={cx('header')}>
      <div>
        <h1>Lunch Menu</h1>
        <h4 className={cx('header__secondary')}>
          Lunch menu for the week of {getCurrentWeekDate()}
        </h4>
      </div>
      <ul className={cx('header__list')}>
        {days.map((day) => (
          <li key={Math.random()}>
            <button
              className={cx('header__button')}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
