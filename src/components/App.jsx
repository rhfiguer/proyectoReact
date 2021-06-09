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
import Footer from './Footer';


//--------------------------------------------------------
// We set function & components
//--------------------------------------------------------

const App = () => (
    <div className='App'>
        <Header/>
        <Search/>
        <Categories>
            <Carousel>
                <CarouselItem>
                </CarouselItem>

                <CarouselItem>
                </CarouselItem>

                <CarouselItem>
                </CarouselItem>

                <CarouselItem>
                </CarouselItem>

                <CarouselItem>
                </CarouselItem>

                <CarouselItem>
                </CarouselItem>

            </Carousel>
        </Categories>
        <Footer/>
       
            
    </div>
);

export default App;