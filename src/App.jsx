import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import NavBar from './components/nab';

function HomePage() {
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
            <Link to="/plants" className="get-started-btn">
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
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