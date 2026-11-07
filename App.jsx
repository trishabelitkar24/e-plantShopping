import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero background-image">
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="hero-kicker">A greener home starts here</p>
              <h1>Welcome to<br /><em>Paradise Nursery</em></h1>
              <p className="hero-description">
                Thoughtful greenery for slower mornings, brighter corners,
                and spaces that feel a little more like you.
              </p>
              <Link to="/plants" className="button hero-button">Get Started <span>→</span></Link>
            </div>
            <div className="hero-caption">GROW SOMETHING GOOD</div>
          </div>
        </section>
        <section className="home-feature-strip">
          <div><span>01</span><p>Curated plants</p></div>
          <div><span>02</span><p>For every corner</p></div>
          <div><span>03</span><p>Made for plant people</p></div>
        </section>
        <AboutUs />
        <section className="home-cta">
          <p className="eyebrow">Your next favourite plant is waiting</p>
          <h2>Make room for a little more green.</h2>
          <Link to="/plants" className="button">Shop the collection</Link>
        </section>
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow something good.</footer>
    </>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
