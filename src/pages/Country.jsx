import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/Loader";
import { CountryCard } from '../components/CountryCard';
import { SearchFilter } from "../components/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  // Pagination logic
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filterCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filterCountries.length / countriesPerPage);

  const getPaginationNumbers = () => {
    const paginationArray = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 2) {
        paginationArray.push(i);
      } else if (paginationArray[paginationArray.length - 1] !== "...") {
        paginationArray.push("...");
      }
    }
    return paginationArray;
  };

  return (
    <section className="mx-auto my-16 mb-24 px-4 md:px-8 lg:px-16">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {currentCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1} 
          className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 disabled:opacity-50">
          &#60;
        </button>
        {getPaginationNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && paginate(page)}
            className={`px-4 py-2 rounded-full transition ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 disabled:opacity-50">
          &#62;
        </button>
      </div>
    </section>
  );
};

export default Country;


