import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/cartSlice";

const Navbar = () => {
  const { quantity } = useSelector((store: IRootState) => store.cart);

  return (
    <nav>
      <div className="cartNavbar">
        <h3>My Cart</h3>
        <div className="cartIcon">
          <p>{quantity}</p>
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
