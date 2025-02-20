import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../api/postApi";
import { Loader } from "../components/Loader";
import InfoItem from "../components/InfoItem";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl">
        {country && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Country Flag - Responsive Image */}
            <div className="flex justify-center items-center">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg object-contain shadow-lg border border-gray-700"
              />
            </div>

            {/* Country Info */}
            <div className="space-y-6 text-white">
              <h2 className="text-3xl font-bold text-white border-b border-gray-600 pb-2">
                {country.name.official}
              </h2>

              <div className="space-y-4">
                <InfoItem
                  label="Native Names"
                  value={Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                />
                <InfoItem
                  label="Population"
                  value={country.population.toLocaleString()}
                />
                <InfoItem label="Region" value={country.region} />
                <InfoItem label="Sub Region" value={country.subregion} />
                <InfoItem label="Capital" value={country.capital} />
                <InfoItem label="Top Level Domain" value={country.tld[0]} />
                <InfoItem
                  label="Currencies"
                  value={Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                />
                <InfoItem
                  label="Languages"
                  value={Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                />
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="flex justify-end mt-8">
          <NavLink to="/country">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
