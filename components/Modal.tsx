import React, { ReactElement } from 'react'
import { useModal } from '../context/useModal';
import { CovidDataByRegion } from '../interfaces/CovidDataByRegion'

interface Props {
}

export default function Modal({ }: Props): ReactElement {

    const { isOpen, setIsOpen, data }: { isOpen?: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, data: CovidDataByRegion } = useModal();
    const keyToSkip: Array<string> = ['region', 'name']

    React.useEffect(() => {

        if (isOpen) {
            document.querySelector('#__next')?.classList.add('opacity-20');
        } else {
            document.querySelector('#__next')?.classList.remove('opacity-20');
        }
        return () => document.querySelector('#__next')?.classList.remove('opacity-20');
    }, [isOpen]);

    React.useEffect(() => {
        document.body.addEventListener('click', closeModal)
        return () => {
            document.body.removeEventListener('click', closeModal);
            const modal = document.querySelector('#modal');
        }
    });

    const closeModal = (e: any): void => {
        if (!e.target.closest('#modal')) {
            document.querySelector('#modal')?.classList.remove('animate-slideUp');
            document.querySelector('#modal')?.classList.add('animate-slideDown');
            setTimeout(() => { setIsOpen(false) }, 500)
        }
    }

    return (
        <div id="modal" className='fixed top-2/4 left-2/4 w-full h-auto sm:min-w-min lg:w-2/4 border-gray-1 rounded-xl bg-gray-100 p-14 text-center text-xl duration-500 animate-slideUp'>
            <h2 className="font-bold text-3xl" > {data.region || data.name}</h2>
            <table className="text-center w-full mx-auto mt-10 border">
                <thead className="text-md font-bold italic">
                    <tr>
                        {Object.keys(data).map((field: string, idx: number) => {
                            if (keyToSkip.find(key => key === field)) return;
                            return <td className="p-5 border" key={idx}>{field}</td>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.entries(data).map(([field, value], idx) => {
                            if (keyToSkip.find(key => key === field)) return;
                            return <td key={idx} className="p-5 border">
                                {value}
                            </td>
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
