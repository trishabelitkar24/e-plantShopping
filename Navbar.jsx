import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartQuantity } from "../CartSlice";

export default function Navbar() {
  const cartQuantity = useSelector(selectCartQuantity);

  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark">✿</span>
        <span>paradise<span className="brand-light">nursery</span></span>
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-nav-link">
          <span aria-hidden="true">🛒</span> Cart
          <span className="cart-badge" aria-label={`${cartQuantity} items in cart`}>
            {cartQuantity}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
