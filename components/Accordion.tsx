import React, { ReactElement } from 'react'

interface Props {
    children: ReactElement
}

export default function Accordion({ children }: Props): ReactElement {

    const accordionContainerRef = React.createRef<HTMLDivElement>();

    const openCloseAccordion = (): void => {
        if (accordionContainerRef.current) {
            accordionContainerRef.current.classList.toggle('max-h-0');
            accordionContainerRef.current.classList.toggle('max-h-52');
        }
    }

    return (
        <div className="w-full mx-auto px-10" onClick={openCloseAccordion}>
            <div className="container bg-white border border-gray-200 rounded-lg cursor-pointer" >
                <h2 className="mb-0 flex items-center justify-between">
                    <button
                        className="text-lg relative flex items-center w-full py-4 px-5  text-left bg-white border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Infettati per regione
                    </button>
                    <div className={`w-5 h-5 border-t-2 border-l-2 border-gray-300 transition-all m-4 
                        ${accordionContainerRef.current?.classList.contains('max-h-0')} rotate-45  mt-6`}>
                    </div>
                </h2>
                <div
                    className='bg-stone-100 transition-[max-height] duration-500 max-h-0 overflow-auto'
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    ref={accordionContainerRef}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
