import React, { useCallback, useState } from 'react'
import { lang, addLocale, setLocale } from 'react-i18n'
import ar from "./lang/ar.json";
import en from "./lang/en.json";
import es from "./lang/es.json";
import Hello from "./components/hello";
import Desc from "./components/desc";

addLocale("ar", ar, { isRTL: true })
addLocale("en", en)
addLocale("es", es)
setLocale('en')

const App =()=> {
  const changeLanguage = useState()[1]
  const changeLang = useCallback((locale) => {
  changeLanguage(locale)
  setLocale(locale)
  },[changeLanguage])
  
    return (<div>
      <Hello />
      <Desc />
      <div>
        <button onClick={()=>changeLang('es')}>{lang.btns.toSpanish}</button>
        <button onClick={()=>changeLang('en')}>{lang.btns.toEnglish}</button>
        <button onClick={()=>changeLang('ar')}>{lang.btns.toArabic}</button>
      </div>
    </div>)

}



export default App
