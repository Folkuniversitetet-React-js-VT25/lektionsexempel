import "./Order.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import { useCreateOrderMutation } from "../api/apiSlice";

function Order() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const [createOrder, { isLoading, isSuccess, isError, error }] =
    useCreateOrderMutation();

  const cartItemComponents = cart.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  function sum() {
    // Räknar ut totalsumman av alla produkter, här behöver du modifiera för att också ta hänsyn till kvantitet
    const initialValue = 0;
    const total = cart.reduce((total, item) => {
      return item.price + total;
    }, initialValue);

    return Math.round(total);
  }

  async function placeOrder() {
    const order = await createOrder(cart).unwrap();
    console.log(order);
  }

  return (
    <section className="order">
      <h2>Cart</h2>
      <section className="order__summary">
        {cartItemComponents}
        <p>Summa: {sum()} kr</p>
      </section>
      <button onClick={placeOrder}>Beställ</button>
      <Link to="/">Tillbaka till produkter</Link>
    </section>
  );
}

export default Order;
