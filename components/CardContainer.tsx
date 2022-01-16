import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import Card from './IndicatorCard'
import { CovidData } from '../interfaces/CovidData';
import AccordionContainer from './accordion/AccordionContainer';
import Modal from '../components/Modal'
import { ModalProvider, useModal } from '../context/useModal';
import Portal from './Portal';


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

const regionKeys: object[] = [
    { 'locations': 'Regione' },
    { 'casesByState': 'Casi per stato' },
    { 'infectedByRegion': 'Casi per regione' }
]

export interface Props {

    data: CovidData | any
}
export default function CardContainer({ data }: Props): ReactElement {

    const { isOpen: isModalOpen } = useModal();

    let keyToShowPerRegion: string = "";
    regionKeys.forEach((regionKey) => {
        const key = Object.keys(regionKey)[0];
        if (key in data && data[key]) {
            keyToShowPerRegion = key;
        }
    });

    return (
        <div>
            <article className="flex gap-6 justify-center flex-wrap lg:flex-nowrap my-20 mt-10 mx-auto w-full p-10 dark:bg-gray-800 dark:text-white text-center md:grid md:grid-cols-2">
                {keysToObserve.map((field: any, idx: number) => {
                    const key: string = Object.keys(field)[0];
                    if (key in data && data[key]) return <Card key={idx} title={field[key]} value={data[key]} />
                })}
            </article>
            {keyToShowPerRegion != "" && <AccordionContainer dataByRegion={data[keyToShowPerRegion]} />}

            {isModalOpen &&
                <Portal>
                    <Modal />
                </Portal>}
        </div>
    )
}
