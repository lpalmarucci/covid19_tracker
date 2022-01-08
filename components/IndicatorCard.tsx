import React, { ReactElement } from 'react'
import { formatNumber } from '../lib/number'

interface Props {
    title: string,
    value: number
}

export default function Card({ title, value }: Props): ReactElement {

    return (
        <section className="flex flex-col gap-2 border border-gray-200 p-6 w-full h-48 justify-center rounded-2xl md:w-full">
            <h2 className="text-2xl lg:text-3xl">{title}</h2>
            <span className="lg:text-xl">{formatNumber(value)}</span>
        </section>
    )
}
