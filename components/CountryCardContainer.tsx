import React, { ReactElement } from 'react'
import { CountryCovidData } from '../interfaces/CountryCovidData'
import CountryCard from './CountryCard'
import { useSearch } from '../context/useSearch';

interface Props {
    allData: Array<CountryCovidData>
}

export default function CountryCardContainer({ allData }: Props): ReactElement {

    const { q: queryString } = useSearch();
    let data = allData.slice();

    if (queryString !== "") {
        data = data.filter((country) => country.country.toLowerCase().includes(queryString.toLowerCase()))
    }

    return (
        <div className='bg-white dark:bg-gray-800 container mx-auto my-10'>
            <div className="flex flex-wrap w-full mx-auto gap-6 items-center justify-center">
                {data.map((dataByCountry, idx) => (
                    <CountryCard key={idx} name={dataByCountry.country} urlData={dataByCountry.moreData} />
                ))}
            </div>
        </div>
    )
}
