import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-4">
      <h2 className="text-center mb-10 text-4xl text-white font-semibold leading-relaxed">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } = country;
          return (
            <div key={id} className="max-w-xl mx-auto w-full">
              <div className="relative p-10 rounded-3xl bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900
                shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer">
                <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                  {countryName}
                </h3>
                <div className="space-y-3">
                  <p className="text-white">
                    <span className="text-gray-400 font-semibold">Capital: </span>
                    {capital}
                  </p>
                  <p className="text-white">
                    <span className="text-gray-400 font-semibold">Population: </span>
                    {population}
                  </p>
                  <p className="text-white">
                    <span className="text-gray-400 font-semibold">Interesting Fact: </span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
