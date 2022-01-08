import React, { ReactElement } from 'react'

interface Props {

}

export default function Footer({ }: Props): ReactElement {
    return (
        <div className="w-full bg-white border border-gray-200 p-6 text-center flex flex-col gap-y-1 items-center justify-center">
            <h1 className="text-2xl text-gray-500">© Copiright 2022 Il Principato </h1>
            <span className="text-md text-gray-500">Fonte: <a className="underline hover:text-gray-400" href="https://apify.com/covid-19">Apify</a></span>
        </div>
    )
}
