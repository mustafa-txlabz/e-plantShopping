import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import { selectCartCount } from './CartSlice';

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

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Bring nature home</p>
          <h1>Paradise Nursery</h1>
          <AboutUs />
          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;