import { ReactElement } from 'react';
import AddToCartBtn from '../../../Buttons/AddToCartBtn';
import styles from './MenuListAddToCart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type MenuListAddToCartProps = {
  price: number;
};

const MenuListAddToCart = ({ price }: MenuListAddToCartProps): ReactElement => {
  const addToCartHandler = () => {
    console.log('Added');
  };

  const getPrice = (price: number): string => {
    return price.toFixed(2).replace('.', ',');
  };

  return (
    <div className={cx('menu-list-add-to-cart')}>
      <div className={cx("menu-list-add-to-cart__price")}>
        <p className={cx("menu-list-add-to-cart__price-title")}>Price</p>
        <div className={cx("menu-list-add-to-cart__price-amount")}>
          &euro;{getPrice(price)}
        </div>
      </div>
      <AddToCartBtn onClick={addToCartHandler} />
    </div>
  );
};

export default MenuListAddToCart;
