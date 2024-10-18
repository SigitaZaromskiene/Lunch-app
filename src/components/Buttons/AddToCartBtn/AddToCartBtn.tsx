import { ReactElement } from 'react';
import styles from './AddToCartBtn.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type AddToCartProps = {
  onClick: () => void;
};

const AddToCartBtn = ({ onClick }: AddToCartProps): ReactElement => {
  return (
    <button className={cx('add-to-cart-btn')} onClick={onClick}>
      <span className={cx('add-to-cart-btn__plus')}>&#43;</span>Add to cart
    </button>
  );
};
export default AddToCartBtn;
