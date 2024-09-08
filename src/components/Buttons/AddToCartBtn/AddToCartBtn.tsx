type AddToCartProps = {
  addToCartHandler(): void;
};

const AddToCartBtn: React.FC<AddToCartProps> = ({addToCartHandler}) => {
  return (
    <button className="add-to-cart-btn" onClick={addToCartHandler}>
      <span>+</span>Add to cart
    </button>
  );
};
export default AddToCartBtn;
