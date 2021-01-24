const langs = {}
// let defaultLocale;

const langResource = {
  valueInternal: '',
  valueListeners: [function (val) {}],
  set value(val) {
    this.valueInternal = val
    this.valueListeners.forEach((lst) => lst(val))
  },
  get value() {
    return this.valueInternal
  },
  addListener: function (listener) {
    this.valueListeners.push(listener)
  },
  removeListener: function (listener) {
    this.valueListeners = this.valueListeners.filter((lst) => listener !== lst)
  }
}

let lang = langResource.value

const init = ({ dictionary = [], defLocale, isPersist = true }) => {
  dictionary.forEach((el, index) => {
    addLocale(Object.keys(el)[index], el)
    // defLocale && (defaultLocale = defLocale);
  })
}

// const initialLanguage = localStorage.getItem('lang');

// let parsedInitialLanguage;

// try {
//   parsedInitialLanguage = JSON.parse(initialLanguage);
// } catch (err) {
//   parsedInitialLanguage = initialLanguage;
// }

// lang = langs[defaultLocale]
// let isAR = parsedInitialLanguage
//   ? parsedInitialLanguage === 'ar'
//   : defaultLocale === 'ar'
// let isEN = parsedInitialLanguage
//   ? parsedInitialLanguage === 'en'
//   : defaultLocale === 'en'

// const addDefaultLocale = (locale) => {
//   defaultLocale = locale;
// };

const addLocale = (locale, dictionary, options = {}) => {
  langs[locale] = {
    locale,
    dictionary,
    isRTL: options.isRTL,
    fontFamily: options.fontFamily
  }
}

const setLocale = (lg) => {
  langResource.value = langs[lg].dictionary
  lang = langs[lg].dictionary
  const HTMLNode = document.getElementsByTagName('html')[0]
  const bodyNode = document.getElementsByTagName('body')[0]
  HTMLNode.setAttribute('lang', lang.locale)
  bodyNode.style.fontFamily = lang.fontFamily
  HTMLNode.setAttribute('dir', lang.isRTL ? 'rtl' : 'ltr')
  bodyNode.dir = lang.isRTL ? 'rtl' : 'ltr'
  bodyNode.style.textAlign = lang.isRTL ? 'right' : 'left'
}

// TODO: CHANGE IT TO REGEX
const interpolate = (path, obj) => {
  if (!path) {
    /* eslint-disable */
    console.error("Path paramter inside interpolate function is not a string, Path: ", path)
  }
  let branch = lang
  let subPath = path
  let hasNext = subPath.indexOf(".") > -1
  while (hasNext) {
    const key = subPath.slice(0, subPath.indexOf("."))
    branch = branch[key]
    if (!branch) {
      return "Translation not found"
    }
    subPath = subPath.slice(subPath.indexOf(".") + 1)
    hasNext = subPath.indexOf(".") > -1
  }
  branch = branch[subPath] || subPath

  let interpolatedString = branch
  if (obj) {
    Object.keys(obj).forEach(key => {
      interpolatedString = interpolatedString.replace(`{{${key}}}`, obj[key])
    })
  }
  return interpolatedString
}


export { init, lang, setLocale, interpolate, addLocale, langResource }
