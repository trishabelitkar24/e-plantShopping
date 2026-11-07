import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotal,
} from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);

  const calculateTotalCost = (item) => item.price * item.quantity;
  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + calculateTotalCost(item), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleDelete = (id) => dispatch(removeItem(id));

  const handleCheckout = () => {
    window.alert("Thank you for choosing Paradise Nursery! Checkout is coming soon.");
  };

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

  return (
    <>
      <Navbar />
      <main className="cart-page page-shell">
        <section className="page-intro cart-intro">
          <p className="eyebrow">Your little green collection</p>
          <h1>Shopping <em>cart.</em></h1>
          <p>Review your plants before bringing them home.</p>
        </section>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon">🪴</div>
            <h2>Your cart is waiting to grow.</h2>
            <p>You haven't added any plants yet. Find a favourite to get started.</p>
            <Link className="button" to="/plants">Explore Plants</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list" aria-label="Shopping cart products">
              {cartItems.map((item) => (
                <article className="cart-item-card" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit price: {formatPrice(item.price)}</p>
                    <p className="cart-item-subtotal">
                      Item total: <strong>{formatPrice(calculateTotalCost(item))}</strong>
                    </p>
                    <div className="cart-item-actions">
                      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                        <button onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name}`}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name}`}>+</button>
                      </div>
                      <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside className="order-summary">
              <p className="eyebrow">Almost yours</p>
              <h2>Order summary</h2>
              <div className="summary-row">
                <span>Plants ({cartItems.reduce((n, item) => n + item.quantity, 0)} items)</span>
                <span>{formatPrice(calculateTotalAmount())}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span className="free-label">Free</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <strong>{formatPrice(totalAmount)}</strong>
              </div>
              <button className="button checkout-button" onClick={handleCheckout}>Checkout</button>
              <Link className="continue-link" to="/plants">← Continue Shopping</Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
