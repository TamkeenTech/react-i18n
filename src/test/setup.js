import { init } from '../lang'
import ar from './test-lang/ar.json'
import en from './test-lang/en.json'
import es from './test-lang/es.json'

export default function setup(locale) {
  init({
    resources: [
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
