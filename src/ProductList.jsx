import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';
import NavBar from './components/nab';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 24,
    category: 'Low Light',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    price: 32,
    category: 'Low Light',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 28,
    category: 'Air Purifying',
    image:
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Spider Plant',
    price: 18,
    category: 'Air Purifying',
    image:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Fiddle Leaf Fig',
    price: 38,
    category: 'Statement',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'ZZ Plant',
    price: 26,
    category: 'Easy Care',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    name: 'Pothos',
    price: 20,
    category: 'Easy Care',
    image:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 8,
    name: 'Aloe Vera',
    price: 16,
    category: 'Easy Care',
    image:
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 9,
    name: 'Bird of Paradise',
    price: 42,
    category: 'Statement',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80'
  }
];

const categories = ['Low Light', 'Air Purifying', 'Easy Care', 'Statement'];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleaddItem = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <NavBar />
      <section className="product-page">
        <div className="section-heading">
          <h2>Plant Collection</h2>
          <p>Find the perfect greenery for every room in your home.</p>
        </div>

        {categories.map((category) => {
          const categoryPlants = plants.filter((plant) => plant.category === category);

          return (
            <div key={category} className="category-section">
              <h3>{category}</h3>
              <div className="product-grid">
                {categoryPlants.map((plant) => {
                  const isInCart = cartItems.some((item) => item.id === plant.id);

                  return (
                    <article key={plant.id} className="plant-card">
                      <img src={plant.image} alt={plant.name} className="plant-image" />
                      <div className="plant-details">
                        <h4>{plant.name}</h4>
                        <p>$ {plant.price.toFixed(2)}</p>
                      </div>
                      <button
                        type="button"
                        className="add-to-cart-btn"
                        onClick={() => handleaddItem(plant)}
                        disabled={isInCart}
                      >
                        {isInCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
