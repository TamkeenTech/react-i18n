import React, { useCallback, useState } from 'react'
import { lang, setLocale, init } from 'react-i18n-translator'
import ar from './lang/ar.json'
import en from './lang/en.json'
import es from './lang/es.json'
import Hello from './components/hello'
import Desc from './components/desc'

init({
  resourses: [
    {
      locale: 'ar',
      dictionary: ar,
      options: { isRTL: true }
    },
    { locale: 'en', dictionary: en },
    { locale: 'es', dictionary: es }
  ],
  defaultLocale: 'ar'
})

const App = () => {
  const changeLanguage = useState()[1]
  const changeLang = useCallback(
    (locale) => {
      setLocale(locale)
      changeLanguage(locale)
    },
    [changeLanguage]
  )

  return (
    <div>
      <Hello />
      <Desc />
      <div>
        <button onClick={() => changeLang('es')}>{lang.btns.toSpanish}</button>
        <button onClick={() => changeLang('en')}>{lang.btns.toEnglish}</button>
        <button onClick={() => changeLang('ar')}>{lang.btns.toArabic}</button>
      </div>
    </div>
  )
}

export default App
