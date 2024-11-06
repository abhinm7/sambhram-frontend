import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CarouselComponent.css'

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOVoASIrh9O0nBleaRqmP0ramt5YA74bFog&s', // Replace with your image paths
  'https://img.freepik.com/premium-photo/confetti-fireworks-crowd-music-festival_989072-16.jpg?semt=ais_hybrid',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2BfE93iziXfsAdNAh9D_dJQgZReFEpu3Cg&s',
  "https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg",
  'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
  "https://media.istockphoto.com/id/1227224540/vector/golden-dragon-on-red-background.jpg?s=612x612&w=0&k=20&c=H3C4-DZi40e9TfD-meaq27lghQvOwQPClPLcLebWNnw=",
  "https://e0.pxfuel.com/wallpapers/473/499/desktop-wallpaper-japan-dragon-japanese-dragon-aesthetic.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhR0m7aeJ3K1uKlijJZ5I_jpigSWZFTdw03Q&s"
  // Add more image paths here
];

export default function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        slidesPerView={5} 
        spaceBetween={-120}
        loop={true} 
        autoplay={{
          delay: 1700, // Time between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5, // Controls spacing depth and size of the slides
          slideShadows: false, // Disable shadow if not needed
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Add Autoplay module
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
