//--------------------------------------------------------
// We import
//--------------------------------------------------------

import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from './Header';
import Search from './Search';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import Footer from './Footer';
import useInitialState from './hooks/useInitialState';


//--------------------------------------------------------
// We set function & components
//--------------------------------------------------------
const API = 'http://localhost:3000/initialState'
const App = () => {
    const initialState = useInitialState(API);
    return initialState.lenght === 0 ? <h1>Loading ...</h1> : (
    
        <div className='App'>
            <Header/>
            <Search/>

            { initialState.mylist.lenght > 0 && 
                <Categories title='Mi Lista'>
                    <Carousel>
                        {initialState.trends.map(item => 
                            <CarouselItem key = {item.id} {...item}>
                            </CarouselItem>
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title='Tendencias'>

                <Carousel>
                    {initialState.trends.map(item => 
                        <CarouselItem key = {item.id} {...item}>
                        </CarouselItem>

                    )}
                </Carousel>

            </Categories>

            <Categories title='Originales de Platzi Video'>

                <Carousel>
                    {initialState.trends.map(item => 
                        <CarouselItem key = {item.id} {...item}>
                        </CarouselItem>

                    )}
                </Carousel>

            </Categories>


            <Footer/>
        
                
        </div>
    )
}

export default App;