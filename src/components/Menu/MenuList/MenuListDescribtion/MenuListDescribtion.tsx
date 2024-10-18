import { getAverageMealRating } from '../../../../helpers/getAverageMealRating';
import styles from './MenuListDescription.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type MenuListDescriptionProps = {
  mealId: number;
  description: string;
};

const MenuListDescription = ({
  mealId,
  description,
}: MenuListDescriptionProps) => {
  const rating = getAverageMealRating(mealId);

  return (
    <div className={cx('menu-list-description')}>
      <p className={cx('menu-list-description__text')}>{description}</p>
      <div className={cx('menu-list-description__rating')}>
        <div className={cx('menu-list-description__star')}>
        &#9733; {rating.toFixed(1)}
        </div>
        <div className={cx('menu-list-description__more-info')}>
          <p className={cx('menu-list-description__more-text')}>
            More Info {/* will be btn later on */}
            <span className={cx('menu-list-description__btn')}>&#8594;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuListDescription;
