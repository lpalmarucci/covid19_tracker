import React, { ReactElement } from 'react'
import { AccordionProvider } from '../../context/accordion.context'
import InfectedByRegion from '../InfectedByRegion'
import Accordion from './Accordion'
import { CovidDataByRegion } from '../../interfaces/CovidDataByRegion'

interface Props {
    dataByRegion: Array<CovidDataByRegion>
}

export default function AccordionContainer({ dataByRegion }: Props): ReactElement {
    return (
        <AccordionProvider>
            <Accordion>
                {dataByRegion.map((data: CovidDataByRegion, idx: number) => {
                    return <InfectedByRegion key={idx} data={data} />
                })}
            </Accordion>
        </AccordionProvider>
    )
}
