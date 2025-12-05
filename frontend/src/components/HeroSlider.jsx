import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1623051786509-57224cdc43e1?w=1920&q=85',
    alt: 'Luxury Residential Building 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1762195804027-04a19d9d3ab6?w=1920&q=85',
    alt: 'Luxury Residential Building 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1758448500872-0d31e905a9e7?w=1920&q=85',
    alt: 'Luxury Residential Building 3'
  },
  {
    url: 'https://images.unsplash.com/photo-1758448511648-d7d8e1993c3f?w=1920&q=85',
    alt: 'Modern Luxury Building'
  },
  {
    url: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?w=1920&q=85',
    alt: 'Contemporary Architecture 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?w=1920&q=85',
    alt: 'Contemporary Architecture 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1695067439143-81a61a8c904a?w=1920&q=85',
    alt: 'Modern Building Exterior'
  },
  {
    url: 'https://images.unsplash.com/photo-1519662978799-2f05096d3636?w=1920&q=85',
    alt: 'Luxury Architecture'
  }
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="hidden lg:block absolute inset-0">
      {/* Carousel Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
