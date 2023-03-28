import React from 'react';
import{BrowserRouter,Routes,Route} from "react-router-dom"

import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Header from './components/Header';
import Cards from './components/Cards';

const App = () => {
  return (

    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/testimonials" element={<Testimonial/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/specials" element={<Cards/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
