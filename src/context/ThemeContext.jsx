import { useState, createContext } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

  const light = {
    backgroundColor: "#28DF99" ,
    color: "black",
  };
  
  const dark = {
    backgroundColor: "#191919",
    color: "white",
  };

  const [theme, setTheme] = useState(dark)
  console.log(theme)

  const toggleTheme = () => {
   
    setTheme(theme.color === "black" ? dark : light)
  }
  

  const data = {
   theme,
   toggleTheme
  }

 return <ThemeContext.Provider value={data} >{children}</ThemeContext.Provider>

}

export default ThemeContextProvider


