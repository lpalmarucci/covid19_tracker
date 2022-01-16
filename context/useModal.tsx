import React, { ReactElement } from 'react'
import { CovidDataByRegion } from '../interfaces/CovidDataByRegion'

interface ModalContextInterface {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    data: CovidDataByRegion,
    setData: React.Dispatch<React.SetStateAction<CovidDataByRegion>>
}

interface ModalProviderInterface {
    children: React.ReactNode,
}

const defaultValue = {
    isOpen: false,
    setIsOpen: () => { },
    data: {
        region: '',
        name: '',
        infectedCount: '0',
        deceasedCount: '0',
        infected: '0',
        recovered: '0',
        deceased: '0',
        active: '0'
    },
    setData: () => { }
}

export const ModalContext = React.createContext<ModalContextInterface>(defaultValue);

export const useModal = () => React.useContext<ModalContextInterface>(ModalContext);

export const ModalProvider = ({ children }: ModalProviderInterface): ReactElement => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [data, setData] = React.useState(defaultValue.data);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen, data, setData }}>
            {children}
        </ModalContext.Provider>
    )
}