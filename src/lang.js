const LOCAL_STORAGE_KEY = 'react-i18n-translator-lang'
const initialStorageLocale = localStorage.getItem(LOCAL_STORAGE_KEY)
const langs = {}
let defaultLocale
let isRTL
let isLTR
let isPersist = true

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

const init = ({
  resourses = [],
  defaultLocale: givenDefaultLocale,
  isPersist: givenIsPersist = true
}) => {
  resourses.forEach((localeResourse) => {
    addLocale(
      localeResourse.locale,
      localeResourse.dictionary,
      localeResourse.options
    )
  })
  defaultLocale = givenDefaultLocale
  if (!initialStorageLocale || (!givenIsPersist && givenDefaultLocale)) {
    setLocale(givenDefaultLocale)
  }
  if (givenIsPersist) {
    isPersist = givenIsPersist
  }
}

const addDefaultLocale = (locale) => {
  defaultLocale = locale
  if (!initialStorageLocale || (!isPersist && locale)) {
    setLocale(locale)
  }
}

const addLocale = (locale, dictionary, options = {}) => {
  langs[locale] = {
    locale,
    dictionary,
    isRTL: options.isRTL,
    fontFamily: options.fontFamily
  }
  if (isPersist && locale === initialStorageLocale) {
    setLocale(locale)
  }
}

const setLocale = (lg) => {
  const langObject = langs[lg]
  langResource.value = langObject.dictionary
  lang = langObject.dictionary
  isRTL = langObject.isRTL
  isLTR = !langObject.isRTL
  const HTMLNode = document.getElementsByTagName('html')[0]
  const bodyNode = document.getElementsByTagName('body')[0]
  if (langObject.locale) {
    HTMLNode.setAttribute('lang', langObject.locale)
  }
  if (langObject.fontFamily) {
    langObject.fontFamily && (bodyNode.style.fontFamily = langObject.fontFamily)
  }
  HTMLNode.setAttribute('dir', langObject.isRTL ? 'rtl' : 'ltr')
  bodyNode.dir = langObject.isRTL ? 'rtl' : 'ltr'
  bodyNode.style.textAlign = langObject.isRTL ? 'right' : 'left'
  if (isPersist) {
    localStorage.setItem(LOCAL_STORAGE_KEY, lg)
  }
}

// TODO: CHANGE IT TO REGEX
const interpolate = (path, obj) => {
  if (!path) {
    /* eslint-disable */
    console.error(
      'Path paramter inside interpolate function is not a string, Path: ',
      path
    )
  }
  let branch = lang
  let subPath = path
  let hasNext = subPath.indexOf('.') > -1
  while (hasNext) {
    const key = subPath.slice(0, subPath.indexOf('.'))
    branch = branch[key]
    if (!branch) {
      return 'Translation not found'
    }
    subPath = subPath.slice(subPath.indexOf('.') + 1)
    hasNext = subPath.indexOf('.') > -1
  }
  branch = branch[subPath] || subPath

  let interpolatedString = branch
  if (obj) {
    Object.keys(obj).forEach((key) => {
      interpolatedString = interpolatedString.replace(`{{${key}}}`, obj[key])
    })
  }
  return interpolatedString
}

export {
  init,
  lang,
  setLocale,
  interpolate,
  addLocale,
  langResource,
  addDefaultLocale,
  isRTL,
  isLTR
}
