import { getMealRating } from '../../../../helpers/getMealRating';
import styles from './MenuListDescription.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const cutDescriptionText = (description: string) => {
  if (description.length <= 50) {
    return description;
  } else {
    return `${description.slice(0, 52)}...`;
  }
};

const MenuListDescription = ({
  mealId,
  description,
}: {
  mealId: number;
  description: string;
}) => {
  const rating = getMealRating(mealId);
  const shortText = cutDescriptionText(description);

  return (
    <div className={cx('menu-list-description')}>
      <p className={cx('menu-list-description__text')}>{shortText}</p>
      <div className={cx('menu-list-description__rating')}>
        <div className={cx('menu-list-description__star')}>
          ★ {rating.toFixed(1)}
        </div>
        <div className={cx('menu-list-description__more-info')}>
          <p className={cx('menu-list-description__more-text')}>
            More Info{' '}
            {/* will be btn later on */}
            <span className={cx('menu-list-description__btn')}>&#8594;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuListDescription;
