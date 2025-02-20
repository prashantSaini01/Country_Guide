import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Globe from "globe.gl";
import About from "./About";

export const Home = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globeInstance = Globe()(globeRef.current);

    globeInstance
      .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg") // World Map Texture
      .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png") // Topography
      .backgroundColor("rgba(0, 0, 0, 0)") // Transparent background
      .pointOfView({ lat: 20, lng: 0, altitude: 2 });

    // Enable auto-rotation
    const controls = globeInstance.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
  }, []);

  return (
    <>
      <main className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
          
          {/* Left Side - 3D Globe Fixed on Left */}
          <div className="flex justify-start items-center relative">
            <div
              ref={globeRef}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] relative"
            ></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Explore the World, One Country at a Time.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <button className="flex items-center gap-3 bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 w-fit shadow-lg">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>

        </div>
      </main>

      {/* About Section */}
      <About />
    </>
  );
};

export default Home;
