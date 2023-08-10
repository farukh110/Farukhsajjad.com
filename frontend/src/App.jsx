import React from 'react';
import Home from './pages/home';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;