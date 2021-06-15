import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';


const CarouselItem = ( { cover, title, year, contentRating, duration }) => (
    <div class="carousel-item">
        <img class="carousel-item__img" src= {cover} alt= {title}  />
        <div class="carousel-item__details">
          <div>
            <img class="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
            <img class="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
          </div>
          <p class="carousel-item__details--title">{title}</p>
          <p class="carousel-item__details--subtitle">{ `${year} ${contentRating} ${duration}` }</p>
        </div>
    </div>
);

export default CarouselItem;