import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const detectionOptions = {
  // order and from where user language should be detected
  order: ['localStorage', 'navigator', 'querystring', 'cookie', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'i18nextLng',

  // cache user language on
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
}

const options = {
    detection: detectionOptions,
    nonExplicitWhitelist: false,
    fallbackLng: ["en"],
    resources: {
        es: {
            translations: require('../locales/es/translations.json')
        },
        en: {
            translations: require('../locales/en/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(options);

export default i18next;
