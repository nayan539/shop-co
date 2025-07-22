import React, { useEffect, useRef } from "react";

export default function Testimonials() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah M.",
      text:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      text:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: "Mooe T.",
      text:
        "As someone who appreciates unique and stylish clothing, Shop.co has been a game changer. Their collection is fresh, trendy, and perfect for any occasion.",
    },
    {
      name: "Lina P.",
      text:
        "Shop.co offers an amazing variety of clothes that fit perfectly and look fantastic. I always get compliments when I wear their pieces.",
    },
    {
      name: "Mark D.",
      text:
        "The customer service and quality at Shop.co are outstanding. I highly recommend them to anyone looking for stylish and affordable clothing.",
    },
  ];

  // Scroll one card at a time, loop seamlessly
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const firstCard = container.querySelector("div");
    if (!firstCard) return;

    const style = window.getComputedStyle(firstCard);
    const cardWidth = firstCard.offsetWidth + (parseInt(style.marginRight) || 24);
    const totalCards = testimonials.length;

    // Duplicate cards for seamless loop
    // (already done in render: [...testimonials, ...testimonials])

    let isAnimating = false;

    function scrollOneCard() {
      if (!container) return;
      isAnimating = true;
      container.scrollBy({ left: cardWidth, behavior: "smooth" });

      // After animation, check if we need to reset for seamless loop
      setTimeout(() => {
        // If we've reached or passed the end of the first set, reset scrollLeft
        if (container.scrollLeft >= cardWidth * totalCards) {
          container.scrollLeft = container.scrollLeft - cardWidth * totalCards;
        }
        isAnimating = false;
      }, 500); // match smooth scroll duration
    }

    function autoScroll() {
      if (!isAnimating) scrollOneCard();
      animationRef.current = setTimeout(autoScroll, 2500);
    }

    autoScroll();

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
    // eslint-disable-next-line
  }, [testimonials.length]);

  // Manual scroll (arrows)
  function getScrollAmount() {
    const container = containerRef.current;
    if (!container) return 300;
    const firstChild = container.querySelector("div");
    if (!firstChild) return 300;
    const style = window.getComputedStyle(firstChild);
    const marginRight = parseInt(style.marginRight) || 24;
    return firstChild.offsetWidth + marginRight;
  }

  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-30 py-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-7xl tt">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex space-x-4 text-black text-xl cursor-pointer select-none">
            <button
              aria-label="Previous testimonial"
              className="focus:outline-none"
              onClick={scrollPrev}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              aria-label="Next testimonial"
              className="focus:outline-none"
              onClick={scrollNext}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Duplicate testimonials for seamless linear loop */}
          {[...testimonials, ...testimonials].map(({ name, text }, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[320px] bg-white border border-gray-200 rounded-xl p-6 flex-shrink-0 snap-center"
            >
              <div className="flex items-center mb-2 space-x-1 text-yellow-400 text-sm">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="flex items-center mb-3 space-x-2">
                <p className="font-bold text-black text-base">{name}</p>
                <i className="fa-solid fa-check bg-green-500 text-white w-5 h-5 rounded-full flex justify-center items-center text-sm"></i>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{text}"</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}