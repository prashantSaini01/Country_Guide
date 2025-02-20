// import { FaLongArrowAltRight } from "react-icons/fa";
// import { useEffect, useRef } from "react";
// import Globe from "globe.gl";
// import About from "./About";

// export const Home = () => {
//   const globeRef = useRef(null);

//   useEffect(() => {
//     if (!globeRef.current) return;

//     const globeInstance = Globe()(globeRef.current);

//     globeInstance
//       .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
//       .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
//       .backgroundColor("rgba(0, 0, 0, 0)")
//       .pointOfView({ lat: 20, lng: -40, altitude: 2.5 }); // Adjusted point of view

//     const controls = globeInstance.controls();
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.5;
    
//     // Make globe responsive
//     const handleResize = () => {
//       globeInstance.width(globeRef.current.clientWidth);
//       globeInstance.height(globeRef.current.clientHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <>
//       <main className="relative overflow-hidden">
//         {/* Background gradient for better globe visibility */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0" />
        
//         <div className="relative z-10 py-24">
//           <div className="max-w-7xl mx-auto px-6">
//             {/* Text Content - Now taking full width with specific positioning */}
//             <div className="max-w-xl relative z-20">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
//                 Explore the World, One Country at a Time.
//               </h1>
//               <p className="text-lg text-gray-300 mb-8">
//                 Discover the history, culture, and beauty of every nation. Sort,
//                 search, and filter through countries to find the details you need.
//               </p>
//               <button className="flex items-center gap-3 bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 w-fit shadow-lg">
//                 Start Exploring <FaLongArrowAltRight />
//               </button>
//             </div>
//           </div>

//           {/* Globe - Positioned absolutely */}
//           <div className="absolute top-1/2 -right-1/4 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
//             <div
//               ref={globeRef}
//               className="w-full h-full opacity-90"
//             />
//           </div>
//         </div>
//       </main>

//       <About />
//     </>
//   );
// };

// export default Home;
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Globe from "globe.gl";
import About from "./About";

const StarField = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const starCount = 200;
    const container = particlesRef.current;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(star);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={particlesRef} className="stars-container" />;
};

export const Home = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globeInstance = Globe()(globeRef.current);

    globeInstance
      .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
      .backgroundColor("rgba(0, 0, 0, 0)")
      .pointOfView({ lat: 20, lng: -40, altitude: 2.5 });

    const controls = globeInstance.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    
    const handleResize = () => {
      globeInstance.width(globeRef.current.clientWidth);
      globeInstance.height(globeRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <style jsx>{`
        .cosmic-bg {
          background: linear-gradient(to bottom, #0B0B1A, #1A1A2E);
        }
        
        .stars-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: twinkle 2s infinite;
        }
        
        .nebula {
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(142, 45, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(45, 149, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(226, 45, 185, 0.1) 0%, transparent 50%);
        }
        
        .gradient-transition {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(to bottom, transparent, black);
          pointer-events: none;
          z-index: 2;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 0.8; transform: scale(1); }
        }

        .globe-container {
          position: fixed;
          top: 70%;
          right: -10%;
          transform: translateY(-50%);
          width: 800px;
          height: 800px;
          pointer-events: none;
          z-index: 10;
        }
      `}</style>

      <main className="relative overflow-hidden cosmic-bg min-h-screen">
        <StarField />
        <div className="nebula" />
        
        <div className="relative z-10 py-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Content */}
            <div className="max-w-xl relative z-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Explore the World, One Country at a Time.
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover the history, culture, and beauty of every nation. Sort,
                search, and filter through countries to find the details you need.
              </p>
              <button className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 w-fit shadow-lg hover:shadow-blue-500/25">
                Start Exploring <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>

        {/* Gradient Transition */}
        <div className="gradient-transition" />
      </main>

      {/* Fixed Globe */}
      <div className="globe-container">
        <div
          ref={globeRef}
          className="w-full h-full opacity-60"
        />
      </div>

      {/* About Section */}
      {/* <section className="bg-black relative z-10">
        <About />
      </section> */}
    </div>
  );
};

export default Home;