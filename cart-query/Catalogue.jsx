const Catalogue = ({ products, addToCart }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <div>
            <p>
              {product.name} ( price: ${product.price})
            </p>
            <img src={`images/${product.image}`} width="100px" />
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Catalogue;
