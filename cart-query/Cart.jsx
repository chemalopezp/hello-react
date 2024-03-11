const Cart = ({ cart, total }) => {
  return cart.length === 0 ? (
    <p>You haven’t added anything to your shopping cart yet.</p>
  ) : (
    <div style={{ display: "block" }}>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} Qty: {product.quantity}
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
};

export default Cart;
