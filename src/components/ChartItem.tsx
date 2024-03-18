import { FC } from "react";
import { TchartData } from "../data/cartData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCartItem, increaseDecreaseQuantity } from "../redux/cartSlice";

interface IChartItemProps extends TchartData {}

const ChartItem: FC<IChartItemProps> = ({
  id,
  title,
  img,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img src={img} width={300} alt={title}></img>
      <div className="cartDetail">
        <h4>{title}</h4>
        <h4>{price}₺</h4>
        <div>
          <button
            className="cartQuantityButton"
            onClick={() =>
              dispatch(
                increaseDecreaseQuantity({ itemId: id, type: "increase" })
              )
            }
          >
            <FaChevronUp />
          </button>
          <h4>{quantity}</h4>
          <button
            className="cartQuantityButton"
            onClick={() =>
              dispatch(
                increaseDecreaseQuantity({ itemId: id, type: "decrease" })
              )
            }
          >
            <FaChevronDown />
          </button>
        </div>
        <button
          className="cartDeleteButton"
          onClick={() => dispatch(deleteCartItem(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ChartItem;
