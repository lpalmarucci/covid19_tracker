import React, { ReactElement } from "react";
import { CountryCovidData } from "../interfaces/CountryCovidData";
import CountryCard from "./CountryCard";
import { useSearch } from "../context/search.context";

interface Props {
  allData: Array<CountryCovidData>;
}

export default function CountryCardContainer({ allData }: Props): ReactElement {
  const { q: queryString } = useSearch();
  let data = allData.slice();

  if (queryString !== "") {
    data = data.filter((country) =>
      country.country.toLowerCase().includes(queryString.toLowerCase())
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 w-full py-10 h-full min-h-screen">
      <div className="flex flex-wrap w-full h-full min-h-full container mx-auto gap-6 items-center justify-center dark:bg-gray-800">
        {data.length === 0 ? (
          <span className="text-gray-700 dark:text-white text-3xl font-semibold text-center px-4">
            Nessuna occorrenza per &quot;{queryString}&quot;
          </span>
        ) : (
          data.map((dataByCountry, idx) => (
            <CountryCard
              key={idx}
              name={dataByCountry.country}
              urlData={dataByCountry.moreData}
            />
          ))
        )}
      </div>
    </div>
  );
}
