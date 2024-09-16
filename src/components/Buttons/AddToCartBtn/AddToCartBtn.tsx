import { ReactElement } from "react";
import styles from "./AddToCartBtn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type AddToCartProps = {
  addToCartHandler: () => void;
};

const AddToCartBtn = ({ addToCartHandler }: AddToCartProps): ReactElement => {
  return (
    <button className={cx("add-to-cart-btn")} onClick={addToCartHandler}>
      <span>+</span>Add to cart
    </button>
  );
};
export default AddToCartBtn;
