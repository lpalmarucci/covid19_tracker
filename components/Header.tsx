import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useSearch } from '../context/useSearch';

interface Props {
    drawSearchbar?: boolean
}

export default function Header({ drawSearchbar }: Props): ReactElement {

    const menuItemsRef = React.useRef<HTMLDivElement>(null);

    const { q: queryString, setQueryString } = useSearch();


    const showMenuItemsMobile = (): void => {
        if (menuItemsRef.current) {
            menuItemsRef.current.classList.toggle('hidden');
        }
    }

    console.log(menuItemsRef.current);

    return (
        <nav className={`w-full bg-white shadow dark:bg-gray-800 border border-gray-200 dark:border-gray-500`}>
            <div className={`container px-6 py-3 mx-auto md:flex justify-between`}>
                <div className={`flex items-center ${!drawSearchbar ? 'justify-center' : 'justify-between'} w-full`}>
                    <div className={`md:w-full ${!drawSearchbar ? 'text-center' : ''}`}>
                        <Link href="/">
                            <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Covid19 Tracker</a>
                        </Link>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <div className={`flex md:hidden ${!drawSearchbar ? 'hidden' : ''}`}>
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" onClick={showMenuItemsMobile}>
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                {drawSearchbar && <div className={`w-full text-center md:flex md:items-center md:justify-end hidden`} ref={menuItemsRef}>
                    {/* <div className="flex flex-row justify-evenly px-2 py-3 -mx-4 md:mx-0 md:py-0 my-2 gap-y-3">
                        <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 focus:bg-gray-900 focus:text-gray-100">Home</a>
                        <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 focus:bg-gray-900 focus:text-gray-100">About</a>
                        <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 focus:bg-gray-900 focus:text-gray-100">Contact</a>
                    </div> */}



                    <div className="relative my-3 md:w-full xl:w-3/4">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>

                        <input
                            type="text"
                            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Search for city"
                            value={queryString}
                            onChange={(e) => setQueryString(e.target.value)}
                        />
                    </div>
                </div>
                }

            </div>
        </nav >
    )
}
