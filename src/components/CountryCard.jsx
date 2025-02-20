import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="mt-8">
      <div className="rounded-2xl p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
        <img 
          src={flags.svg} 
          alt={flags.alt} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">
            {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
          </h3>
          <p className="text-white">
            <span className="text-gray-400 font-semibold">Population: </span>
            {population.toLocaleString()}
          </p>
          <p className="text-white">
            <span className="text-gray-400 font-semibold">Region: </span>
            {region}
          </p>
          <p className="text-white">
            <span className="text-gray-400 font-semibold">Capital: </span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};


export default CountryCard;