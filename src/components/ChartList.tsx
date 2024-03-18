import { useDispatch, useSelector } from "react-redux";
import { IRootState, clearCart, getTotalPrice } from "../redux/cartSlice";
import ChartItem from "./ChartItem";
import { useEffect } from "react";

const ChartList = () => {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector(
    (store: IRootState) => store.cart
  );

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cartItems, dispatch]);

  return (
    <>
      <section className="cartSection">
        <header>
          <h2>Chart</h2>
        </header>
        {quantity < 1 ? (
          <h4>Chart is empty!</h4>
        ) : (
          <>
            <div>
              {cartItems.map((chartItem, i) => (
                <ChartItem {...chartItem} key={i} />
              ))}
            </div>
            <footer>
              <hr />
              <div>
                <h4>
                  Total: <span>{total} ₺</span>
                </h4>
              </div>
              <button
                className="clearButton"
                onClick={() => dispatch(clearCart())}
              >
                Clear
              </button>
            </footer>
          </>
        )}
      </section>
    </>
  );
};

export default ChartList;
