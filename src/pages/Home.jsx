import { FaLongArrowAltRight } from "react-icons/fa";
import About from "./About";


// Home Component
export const Home = () => {
  return (
    <>
      <main className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Explore the World, One Country at a Time.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <button className="flex items-center gap-3 bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 w-fit">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src='./images/world.jpg'
              alt="world is beauty"
              className="rounded-lg w-full max-w-2xl object-cover"
            />
          </div>
        </div>
      </main>
      <About/>
    </>
  );
};


export default Home;