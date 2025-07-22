import React,{useState,useRef,useEffect} from 'react'

const images = [
  "https://images.unsplash.com/photo-1667052552689-46108eb5c9e3?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CARD_WIDTH = 320;
const CARD_HEIGHT = 420;

const getMod = (n, m) => ((n % m) + m) % m;
const RoundedCarousel = () => {
    const [center, setCenter] = useState(2);
      const containerRef = useRef(null);
      const autoScrollRef = useRef(null);
    
      const prev = () => setCenter((prev) => getMod(prev - 1, images.length));
      const next = () => setCenter((prev) => getMod(prev + 1, images.length));
    
      // Curve offsets for -2, -1, 0, 1, 2
      const curve = [
        { scale: 0.82, y: 60, opacity: 0.5, blur: "none", z: 6 },
        { scale: 0.9, y: 28, opacity: 0.8, blur: "none", z: 8 },
        { scale: 1, y: 0, opacity: 1, blur: "none", z: 10 },
        { scale: 0.9, y: 28, opacity: 0.8, blur: "none", z: 8 },
        { scale: 0.82, y: 60, opacity: 0.5, blur: "none", z: 6 },
      ];
    
      // Setup auto-scroll
      useEffect(() => {
        autoScrollRef.current = setInterval(() => {
          setCenter((prev) => getMod(prev + 1, images.length));
        }, 4000);
    
        return () => clearInterval(autoScrollRef.current);
      }, []);
    
  return (
      <>
      <div
          ref={containerRef}
          className="relative flex items-center justify-center mt-12"
          style={{
            minHeight: CARD_HEIGHT,
            userSelect: "none",
            overflow: "hidden",
            position: "relative",
          }}
          aria-label="New arrivals carousel"
          tabIndex={0}
        >
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-10 bg-black/60 hover:bg-black text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
            onClick={() => {
              prev();
              clearInterval(autoScrollRef.current);
              autoScrollRef.current = setInterval(() => {
                setCenter((prev) => getMod(prev + 1, images.length));
              }, 4000);
            }}
            aria-label="Previous"
            style={{ left: "2%" }}
          >
            <i className="fa-solid fa-arrow-left text-2xl"></i>
          </button>

          {/* Cards */}
          <div
            className="flex items-end justify-center gap-0 w-full relative select-none"
            style={{ height: CARD_HEIGHT }}
          >
            {images.map((img, idx) => {
              let pos = getMod(idx - center, images.length);
              if (pos > images.length / 2) pos -= images.length;

              if (Math.abs(pos) > 2) return null;

              const curveIdx = pos + 2;
              const { scale, y, opacity, blur, z } = curve[curveIdx];
              const left = `calc(50% + ${pos * (CARD_WIDTH * 0.68)}px - ${
                CARD_WIDTH / 2
              }px)`;

              return (
                <div
                  key={idx}
                  className="absolute transition-all duration-700 rounded-t-full"
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    left,
                    zIndex: z,
                    opacity,
                    filter: blur,
                    transform: `scale(${scale}) translateY(${y}px)`,

                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow:
                      pos === 0
                        ? "0 8px 32px rgba(0,0,0,0.18)"
                        : "0 2px 8px rgba(0,0,0,0.08)",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    WebkitTransformStyle: "preserve-3d",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${img})`,
                      width: "100%",
                      height: "100%",
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                    }}
                  />
                  {pos === 0 && (
                    <div
                      className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 bg-black/60 text-white rounded-full px-6 py-4 flex flex-col items-center shadow-lg"
                      style={{
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <span className="text-lg font-semibold">
                        Price for all
                      </span>
                      <span className="text-2xl font-bold">400$</span>
                      <span className="text-gray-300 line-through">540$</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 z-10 bg-black/60 hover:bg-black text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
            onClick={() => {
              next();
              clearInterval(autoScrollRef.current);
              autoScrollRef.current = setInterval(() => {
                setCenter((prev) => getMod(prev + 1, images.length));
              }, 4000);
            }}
            aria-label="Next"
            style={{ right: "2%" }}
          >
            <i className="fa-solid fa-arrow-right text-2xl"></i>
          </button>
        </div>
      </>
  )
}

export default RoundedCarousel