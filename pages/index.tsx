import type { NextPage } from "next";
import Head from "next/head";
import { CountryCovidData } from "../interfaces/CountryCovidData";
import Header from "../components/Header";
import CountryCardContainer from "../components/CountryCardContainer";
import SearchProvider, { useSearch } from "../context/search.context";

interface Props {
  allData: CountryCovidData[];
}

export async function getServerSideProps<GetServerSideProps>() {
  const data = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL || ''
  );
  const res: CountryCovidData | CountryCovidData[] | any = await data.json();

  if (res.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allData: res,
    },
  };
}

const Home: NextPage<Props> = ({ allData }: Props) => {
  return (
    <>
      <Head>
        <title>Covid 19 Tracker</title>
      </Head>

      <SearchProvider>
        <Header drawSearchbar={true} />
        <CountryCardContainer allData={allData} />
      </SearchProvider>
    </>
  );
};

export default Home;
