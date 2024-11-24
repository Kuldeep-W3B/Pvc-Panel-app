import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ShowcasePage from './components/Showcase';
import ProductPage from './pages/Product';
import RecentWorkPage from './pages/Recent';
import Footer from './components/Footer';
import LocationPage from './components/Location';
import AboutUs from './pages/About';


const App = () => {
  return (
    <>
    <Navbar/>
    <section id="home">
      <Header/>
    </section>
    <ShowcasePage/>
    <section id="services">
      <ProductPage/>
    </section>
    <section id="works">
      <RecentWorkPage/>
    </section>
    <section id="about">
      <AboutUs/>
    </section>
    <Footer/>
    </>
  )
}

export default App