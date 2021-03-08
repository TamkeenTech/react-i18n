# react-i18n-translator

> light weight translation library for react

[![NPM](https://img.shields.io/npm/v/react-i18n-translator.svg)](https://www.npmjs.com/package/react-i18n-translator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save react-i18n-translator
```

## Getting Started

### ✣ Prepare Your Dictionary Files in .js or .json Format

_**lang/en.json**_
```json 
{
  "welcome": "Welcome"
}
```
_**lang/es.json**_

```json lang/es.json
{
  "welcome": "Hola"
}
```
_**lang/ar.json**_

```json lang/ar.json
{
  "welcome": "مرحبًا"
}
```

### ✣ Initilizing in Functional Component

```jsx
import React, { useCallback, useState } from 'react'
import { lang, setLocale, init } from 'react-i18n-translator'
import ar from './lang/ar.json'
import en from './lang/en.json'
import es from './lang/es.json'

init({
  resourses: [
    { locale: 'en', dictionary: en },
    { locale: 'es', dictionary: es },
    {
      locale: 'ar',
      dictionary: ar,
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
### ✣ Initilizing in Class Component

```jsx
import React, { useCallback, useState } from 'react'
import { lang, setLocale, init } from 'react-i18n-translator'
import ar from './lang/ar.json'
import en from './lang/en.json'
import es from './lang/es.json'

class App extends React.Component{
  constructor(props){
    super(props);
    init({
      resourses: [
        { locale: 'en', dictionary: en },
        { locale: 'es', dictionary: es },
        {
          locale: 'ar',
          dictionary: ar,
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

const Hello = () => <h1>{lang.welcome}</h1>
```

### ✣ Usage with Memorized Functional Component

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

### ✣ Why I18n Translator?

- **Simplicity:**
- **No Limitation:**
- **lightweight**

## License

MIT © [omaksousa](https://github.com/omaksousa)
