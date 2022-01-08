import React, { Context, ContextType, Dispatch, ReactNode } from 'react'

interface ThemeProps {
    children: ReactNode
}

interface ThemeContextType {
    darkTheme: boolean,
    setDarkTheme: Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = (props: ThemeProps) => {

    const [darkTheme, setDarkTheme] = React.useState(false);

    return (
        <ThemeContext.Provider value={{
            darkTheme, setDarkTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
