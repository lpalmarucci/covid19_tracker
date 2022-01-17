import type { NextPage } from 'next'
import Head from 'next/head'
import Dataset from '../../components/Dataset'
import { CovidData } from '../../interfaces/CovidData'
import { CountryCovidData } from '../../interfaces/CountryCovidData'
import { ParsedUrlQuery } from 'querystring'
import { ModalProvider } from '../../context/useModal'
import Header from '../../components/Header'

interface Props {
    data: CovidData,
    countryName: string
}

interface CountryParams {
    country: string,
    url: string
}

export async function getStaticPaths<getStaticPaths>() {

    const data: Response = await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true');
    const res: CountryCovidData | CountryCovidData[] | any = await data.json();

    if (res.error) {
        return {
            notFound: true
        }
    }

    const paths = res.map((countryObj: CountryCovidData) => (
        { params: { country: countryObj.country, url: countryObj.moreData.split('/')[5] } }
    ))

    return {
        paths,
        fallback: false
    }
}



export async function getStaticProps<GetStaticProps>({ params }: ParsedUrlQuery) {
    const { country, url }: any = params;
    const data: Response = await fetch(`https://api.apify.com/v2/key-value-stores/${url}/records/LATEST?disableRedirect=true`);
    const res: CovidData = await data.json();

    console.log('Building slug: ', country, " ", url)

    if (res.error) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data: res,
            countryName: country
        }
    }
}

const Home: NextPage<Props> = ({ data, countryName }: Props) => {

    return (
        <div className='bg-white dark:bg-gray-800'>
            <Head>
                <title>{countryName}&apos;s Covid Data</title>
            </Head>
            <Header />
            <ModalProvider>
                <Dataset data={data} countryName={countryName} />
            </ModalProvider>
        </div>
    )
}

export default Home
