import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import { useState } from 'react';
import { selectCartCount } from './CartSlice';
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

function HomePage({ setShowProductList }) {
  const handleGetStartedClick = () => {
    // Scroll to the product list section when "Get Started" button is clicked
    setShowProductList(true);
  };
  return (
    <>
      <NavBar />
      <main className="home-page">
        <section className="hero-section background-image">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Bring nature home</p>
            <h1>Paradise Nursery</h1>
            <AboutUs />
            <Link to="/plants" className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage setShowProductList={setShowProductList} />} />
          <Route path="/plants" element={<ProductList showProductList={showProductList} />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;