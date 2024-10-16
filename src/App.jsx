// src/App.jsx
import Header from './components/Header';
import Features from './components/Features';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Features />
      <Product />
      <Footer />
    </div>
  );
}

export default App;