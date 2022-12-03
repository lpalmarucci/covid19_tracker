
import React, { Dispatch, ReactNode } from 'react';

interface AccordionInterface {
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

interface AccordionProps {
    children: ReactNode
}


const accordionContainerRef = React.createRef<AccordionInterface>();


const AccordionContext = React.createContext<AccordionInterface | null>(null);

export const useAccordion = () => React.useContext(AccordionContext);

export const AccordionProvider = ({ children }: AccordionProps) => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </AccordionContext.Provider>
    )
}