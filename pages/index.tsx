import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dataset from '../components/Dataset'
import { CountryCovidData } from '../interfaces/CountryCovidData'
import { CovidData } from '../interfaces/CovidData';
import CountryCard from '../components/CountryCard'
import Link from 'next/link'

interface Props {
  allData: CountryCovidData[]
}

export async function getServerSideProps<GetServerSideProps>() {
  const data = await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true');
  const res: CountryCovidData | CountryCovidData[] | any = await data.json();

  if (res.error) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      allData: res
    }
  }
}

const Home: NextPage<Props> = ({ allData }: Props) => {

  return (
    <>
      <Head>
        <title>Covid 19 Tracker</title>
      </Head>
      <div className='bg-white dark:bg-gray-800 container mx-auto my-10'>
        <div className="flex flex-wrap w-full mx-auto gap-6 items-center justify-center">
          {allData.map((dataByCountry, idx) => (
            <CountryCard key={idx} name={dataByCountry.country} urlData={dataByCountry.moreData} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
