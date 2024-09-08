import AddToCartBtn from "../../../Buttons/AddToCartBtn";

const MenuListAddToCart: React.FC<{ price: number }> = ({ price }) => {
  const addToCartHandler = () => {
    console.log("Added");
  };
  return (
    <div className="menu-list-item__add-to-cart">
      <div className="menu-list-item__add-to-cart__price">
        <p className="menu-list-item__add-to-cart__price-title">Price</p>
        <div className="menu-list-item__add-to-cart__price-amount">
          &euro;{price.toString().replace(".", ",")}
        </div>
      </div>
      <AddToCartBtn addToCartHandler={addToCartHandler} />
    </div>
  );
};

export default MenuListAddToCart;
