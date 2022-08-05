import React,{ useState} from 'react'
import Navbar from "./components/Navbar";
import Mainarea from './components/Mainarea';

const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange=()=>{
    if(theme==="light"){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }

  return (
    <>
      <Navbar theme={theme} switchTheme={handleThemeChange}/>
      <Mainarea difficulty="4" theme={theme}/>
    </>
  )
}

export default App