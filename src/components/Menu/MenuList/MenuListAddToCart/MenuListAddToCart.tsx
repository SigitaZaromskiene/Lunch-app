import { ReactElement } from "react";
import AddToCartBtn from "../../../Buttons/AddToCartBtn";
import styles from "./MenuListAddToCart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type MenuListAddToCartProps = {
  price: number;
};

const MenuListAddToCart = ({ price }: MenuListAddToCartProps): ReactElement => {
  const addToCartHandler = () => {
    console.log("Added");
  };

  return (
    <div className={cx("menu-list-add-to-cart")}>
      <div className="menu-list-add-to-cart__price">
        <p className="menu-list-add-to-cart__price-title">Price</p>
        <div className="menu-list-add-to-cart__price-amount">
          &euro;{price.toString().replace(".", ",")}
        </div>
      </div>
      <AddToCartBtn addToCartHandler={addToCartHandler} />
    </div>
  );
};

export default MenuListAddToCart;
