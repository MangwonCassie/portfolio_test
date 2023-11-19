import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from '../src/locales/en/translation.json'
import translationKO from '../src/locales/ko/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ko', // default language
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;