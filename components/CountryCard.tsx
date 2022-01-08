import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    name: string,
    urlData: string
}

export default function CountryCard({ name, urlData }: Props): ReactElement {
    return (
        <article className="p-10 border border-gray-300 rounded-md text-center mx-10 sm:m-0 w-full sm:w-60 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-all text-xl">
            <Link href={`/${name}/${urlData.split('/')[5]}`} scroll={false}>
                <a>{name}</a>
            </Link>
            <div className="">
            </div>
        </article>
    )
}
