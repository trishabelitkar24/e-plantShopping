import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { plantCategories } from "./data/plants";
import { addItem, selectCartItems } from "./CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedToCart = useMemo(
    () => Object.fromEntries(cartItems.map((item) => [item.id, true])),
    [cartItems]
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar />
      <main className="plants-page page-shell">
        <section className="page-intro">
          <p className="eyebrow">Find your kind of green</p>
          <h1>Plants for every <em>little space.</em></h1>
          <p>Choose your favourites and bring a fresh feeling home.</p>
        </section>

        {plantCategories.map((category) => (
          <section className="plant-category" key={category.id} id={category.id}>
            <div className="category-heading">
              <div>
                <p className="eyebrow">Explore the collection</p>
                <h2>{category.title}</h2>
                <p>{category.subtitle}</p>
              </div>
              <span className="category-count">{category.plants.length} plants</span>
            </div>

            <div className="plant-grid">
              {category.plants.map((plant) => (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap">
                    <img src={plant.image} alt={plant.name} className="plant-image" loading="lazy" />
                    <span className="plant-tag">Plant pick</span>
                  </div>
                  <div className="plant-card-content">
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <div className="plant-card-bottom">
                      <span className="plant-price">₹{plant.price.toLocaleString("en-IN")}</span>
                      <button
                        className={`button button-small ${addedToCart[plant.id] ? "button-added" : ""}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={Boolean(addedToCart[plant.id])}
                      >
                        {addedToCart[plant.id] ? "Added ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
