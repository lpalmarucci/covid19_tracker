import React from 'react'

interface SearchContext {
    q: string,
    setQueryString: React.Dispatch<React.SetStateAction<string>>
}

interface Props {
    children: React.ReactNode
}

const defaultValue = {
    q: "",
    setQueryString: () => { }
}

const SearchContext = React.createContext<SearchContext>(defaultValue)

export const useSearch = () => React.useContext(SearchContext);

export default function SearchProvider({ children }: Props) {

    const [q, setQueryString] = React.useState("");

    return <SearchContext.Provider value={{ q, setQueryString }}>
        {children}
    </SearchContext.Provider>
}
