import { init } from '../lang'
import ar from './lang/ar.json'
import en from './lang/en.json'
import es from './lang/es.json'

export default function setup(locale) {
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
    defaultLocale: locale
  })
}
