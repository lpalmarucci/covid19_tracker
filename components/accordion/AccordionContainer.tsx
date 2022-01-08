import React, { ReactElement } from 'react'
import { AccordionProvider } from '../../context/useAccordion'
import InfectedByRegion from '../InfectedByRegion'
import Accordion from './Accordion'

interface Props {

}

export default function AccordionContainer({ }: Props): ReactElement {
    return (

        <AccordionProvider>
            <Accordion>
                <InfectedByRegion />
            </Accordion>
        </AccordionProvider>
    )
}
