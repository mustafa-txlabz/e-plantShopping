import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateQuantity,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal
} from './CartSlice';

function NavBar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <Link to="/" className="nav-brand">
        Paradise Nursery
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Link to="/cart" className="cart-button" aria-label={`Shopping cart with ${cartCount} items`}>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}
const calculateTotal = (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartCount);
  const totalCost = calculateTotal(cartItems);

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <>
      <NavBar />

      <section className="cart-page">
        <div className="cart-header-row">
          <div>
            <h2>Your Cart</h2>
            <p>{totalItems} plants selected</p>
          </div>
          <div className="cart-summary-box">
            <span>Total</span>
            <strong>$ {totalCost.toFixed(2)}</strong>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your shopping cart is empty.</p>
            <Link to="/plants" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <article key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>Unit price: $ {item.price.toFixed(2)}</p>
                    <p>Item total: $ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(0, item.quantity - 1)
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-item-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </div>

            <div className="checkout-actions">
              <Link to="/plants" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button type="button" className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}
