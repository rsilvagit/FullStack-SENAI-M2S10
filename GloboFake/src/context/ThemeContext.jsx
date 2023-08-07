import { createContext, useContext, useState } from "react";
 
export const ThemeContext = createContext();
export const ThemeProvider= ({children}) =>{

   const [theme, setTheme] = useState ('light');

   const ToggleTheme = () =>{
       console.log('Alterar tema');
       setTheme(theme === 'light' ? 'dark' : 'light')
     }

    return (
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
           {children}
        </ThemeContext.Provider>
    )
   
}

