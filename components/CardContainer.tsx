import React, { ReactElement } from 'react'
import Card from './IndicatorCard'
import { CovidData } from '../interfaces/CovidData';
import Accordion from './accordion/Accordion'
import InfectedByRegion from './InfectedByRegion';
import { AccordionProvider } from '../context/useAccordion';
import AccordionContainer from './accordion/AccordionContainer';

interface Props {
    data: CovidData
}

const keysToObserve: object[] = [
    { 'newPositive': 'Nuovi positivi' },
    { 'tamponi': 'Tamponi' },
    { 'deceased': 'Deceduti' },
    { 'totalPositive': 'Positivi Totali' },
    { 'intensiveTherapy': 'Terapia Intensiva' },
    { 'homeInsulation': 'Isolamento Fiduciario' },
    { 'tested': 'Tamponati' },
    { 'recovered': 'Guariti' },
    { 'infected': 'Infettati' },
    { 'deaths': 'Morti' },
    { 'totalCases': 'Casi totali' },
    { 'totalDeaths': 'Morti totali' },
    { 'dailytested': 'Nuovi tamponi' },
    { 'dailyTested': 'Nuovi tamponi' },
    { 'dailyinfected': 'Nuovi contagi' },
    { 'dailyInfected': 'Nuovi contagi' },
    { 'dailyConfirmed': 'Nuovi contagi confermati' },
]

export default function CardContainer({ data }: Props): ReactElement {

    console.log('data', data);

    return (
        <>
            <article className="flex gap-6 justify-center flex-wrap lg:flex-nowrap my-20 mt-10 mx-auto w-full p-10 dark:bg-gray-800 dark:text-white text-center md:grid md:grid-cols-2">
                {keysToObserve.map((field: object, idx: number) => {
                    const key: string = Object.keys(field)[0];
                    if (key in data) return <Card key={idx} title={field[key]} value={data[key]} />

                })}

            </article>
            <AccordionContainer />
        </>
    )
}
