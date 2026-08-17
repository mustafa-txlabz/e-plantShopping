import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { selectCartCount } from '../CartSlice';
import { useSelector } from 'react-redux';
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
export default NavBar;