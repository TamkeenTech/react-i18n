# @TamkeenTech/react-i18n

> Lightweight translation library for React.js

[![NPM](https://img.shields.io/npm/v/@tamkeentech/react-i18n.svg)](https://www.npmjs.com/package/@tamkeentech/react-i18n) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save @tamkeentech/react-i18n
```

## Getting Started

### ✣ Prepare Your Dictionary Files in .js or .json Format

_**lang/en.json**_
```json 
{
  "welcome": "Welcome {{name}}",
  "submit": "Submit",
  "errors": {
    "default": "Something went wrong!"
  }
}
```
_**lang/es.json**_

```json lang/es.json
{
  "welcome": "Hola {{name}}",
  "submit": "enviar",
  "errors": {
    "default": "Algo salió mal!"
  }
}
```
_**lang/ar.json**_

```json lang/ar.json
{
  "welcome": "مرحبًا {{name}}",
  "submit": "ارسال",
  "errors": {
    "default": "حدث خطأ ما!"
  }
}
```

### ✣ Initializing in Functional Component

```jsx
import React, { useCallback, useState } from 'react'
import { lang, setLocale, init } from 'react-i18n-translator'
import arDictionary from './lang/ar.json'
import enDictionary from './lang/en.json'
import esDictionary from './lang/es.json'

init({
  resourses: [
    { locale: 'en', dictionary: enDictionary },
    { locale: 'es', dictionary: esDictionary },
    {
      locale: 'ar',
      dictionary: arDictionary,
      options: { isRTL: true }
    }
  ],
  defaultLocale: 'ar'
})

const App = () => {
 ...
  return ...
}
```
### ✣ Initializing in Class Component

```jsx
import React, { useCallback, useState } from 'react'
import { lang, setLocale, init } from 'react-i18n-translator'
import arDictionary from './lang/ar.json'
import enDictionary from './lang/en.json'
import esDictionary from './lang/es.json'

class App extends React.Component{
  constructor(props){
    super(props);
    init({
      resourses: [
        { locale: 'en', dictionary: enDictionary },
        { locale: 'es', dictionary: esDictionary },
        {
          locale: 'ar',
          dictionary: arDictionary,
          options: { isRTL: true }
        }
      ],
      defaultLocale: 'ar'
    })
  }

  render(){
    ...
    return ...
  }
}
```

## Usage and Examples

### ✣ Basic Usage

```jsx
import React from 'react'
import { lang } from 'react-i18n-translator'

const Button = () => <button>{lang.submit}</button>
const ErrorMsg = () => <button>{lang.errors.default}</button>
```

### ✣ Interpolation

```jsx
import React from 'react'
import { interpolate } from 'react-i18n-translator'

const Hello = () => <h1>{interpolate('welcome', { name: "Omar" })}</h1>
const ErrorMsg = () => <h1>{interpolate('errors.default')}</h1>
```

### ✣ Usage with Memoized Functional Component

```jsx
import React, { memo } from 'react'
import { lang, useSyncLang } from 'react-i18n-translator'

const Hello = () => {
  useSyncLang()
  return <h1>{lang.welcome}</h1>
}

export default memo(Hello)
```

### ✣ Usage with PureComponent

```jsx
import React, { memo } from 'react'
import { lang, withSyncLang } from 'react-i18n-translator'

class Hello extends React.PureComponent {
  render() {
    return <h1>{lang.welcome}</h1>
  }
}

export default withSyncLang(Hello)
```

### ✣ Changing Language

```jsx
import React, { useState } from 'react'
import { lang, setLocale} from 'react-i18n-translator'

const App = () => {
  const changeLanguage = useState()[1];
  const changeLang = (locale) => {
    setLocale(locale)
    changeLanguage(locale)
  }
  return (
    <div>
      {lang.welcome}
    </div>
  )
}
```

## API
| Attribute | Type |  Description |
| ------ | ------ | ------ |
| lang | object | An object that holds the selected dictionary |
| init | function | For initializaion |
| addLocale | function | Adds new dictionary. It takes two parametes: 1- locale key. 2- dictionary object |
| setLocale | function | Changes the selected locale to a new one. Takes one parameter: locale key |
| interpolate | function | Takes two parameters: 1- path to the targeted dictionary key. 2- an object that holds the variables |
| isRTL | boolean | Flag for checking if the current direction is RTL |
| isLtr | boolean |  Flag for checking if the current direction is LTR |

## Why I18n Translator?
- **Simplicity**
- **No Limitation**
- **lightweight**

## License
MIT © [omaksousa](https://github.com/omaksousa)
