import { useEffect, useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import Catalogue from "./Catalogue";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetchProducts().then((products) => {
      console.log("Fetched the products", products);
      setProducts(products);
    });
  });
  const addToCart = (product) => {
    console.log("Adding to cart ", product);
    const productInCart = cart.find((p) => p.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    console.log("Cart changed", cart);
    setTotal(
      cart
        .reduce((acc, product) => {
          if (product.quantity >= 3) {
            return acc + product.price * product.quantity * 0.9;
          } else {
            return acc + product.price * product.quantity;
          }
        }, 0)
        .toFixed(2)
    );
  }, [cart]);
  return (
    <>
      <h1>Welcome to query cart!</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 20,
        }}
      >
        <Catalogue products={products} addToCart={addToCart} />
        <Cart cart={cart} total={total} />
      </div>
    </>
  );
};

export default App;
