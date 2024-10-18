import { ReactElement } from 'react';
import styles from './SortMenu.module.scss';
import classNames from 'classnames/bind';
import { type Meals } from '../SearchMenu/SearchMenu';
import { getAverageMealRating } from '../../helpers/getAverageMealRating';

const cx = classNames.bind(styles);

type SortMenuProps = {
  filteredMeals: Meals[];
  setFilteredMeals: (meals: Meals[]) => void;
};

const SortMenu = ({
  filteredMeals,
  setFilteredMeals,
}: SortMenuProps): ReactElement => {
  const sortByPopularity = () => {
    const sortedByPopularityMeals = [...filteredMeals].sort(
      (a, b) => b.ordersCount - a.ordersCount
    );
    setFilteredMeals(sortedByPopularityMeals);
  };
  const sortByPrice = () => {
    const sortedByPriceMeals = [...filteredMeals].sort(
      (a, b) => a.price - b.price
    );
    setFilteredMeals(sortedByPriceMeals);
  };
  const sortByRating = () => {
    const sortedByRatingMeals = [...filteredMeals].sort((a, b) => {
      const avgRatingA = getAverageMealRating(a.id);
      const avgRatingB = getAverageMealRating(b.id);
      return avgRatingB - avgRatingA;
    });
    setFilteredMeals(sortedByRatingMeals);
  };

  return (
    <div className={cx('sort-menu')}>
      <p className={cx('sort-menu__text')}>Sort By</p>
      <ul className={cx('sort-menu__buttons')}>
        <li>
          <button
            className={cx('sort-menu__button')}
            type="button"
            onClick={sortByPopularity}
          >
            POPULARITY
          </button>
        </li>
        <li>
          <button
            className={cx('sort-menu__button')}
            type="button"
            onClick={sortByPrice}
          >
            PRICE
          </button>
        </li>
        <li>
          <button
            className={cx('sort-menu__button')}
            type="button"
            onClick={sortByRating}
          >
            RATING
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortMenu;
