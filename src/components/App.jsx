//--------------------------------------------------------
// We import
//--------------------------------------------------------

import React from 'react';
import '../assets/styles/App.scss';
import Header from './Header';
import Search from './Search';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';


//--------------------------------------------------------
// We set function & components
//--------------------------------------------------------

const App = () => (
    <div className='App'>
        <Header/>
        <Search/>
        <Categories/>
            <CarouselItem/>
            <Carousel/>
    </div>
);

export default App;