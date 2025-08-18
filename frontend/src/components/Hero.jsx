import React, { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { backendUrl } = useContext(ShopContext)

  const [slides, setSlides] = useState([
    { id: 1, image: assets.carousel },
    { id: 2, image: assets.carousel },
    { id: 3, image: assets.carousel }
  ])

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/carousel/active`)
        const data = await res.json()
        if (data.success && data.slides?.length) {
          const mapped = data.slides.map((s, idx) => ({ id: s._id || idx, image: s.imageUrl }))
          setSlides(mapped)
        }
      } catch (err) {
        // ignore, keep defaults
      }
    }
    fetchSlides()
  }, [backendUrl])

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='relative overflow-hidden border border-gray-400'>
      {/* Carousel Container */}
      <div className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className='w-full flex-shrink-0'>
            {/* Full Image Slide */}
            <div className='w-full h-full'>
              <img className='w-full h-full object-cover' src={slide.image} alt="Carousel" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10'
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10'
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-110' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
