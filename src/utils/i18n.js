import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      packSuit: "Pack your suitcase, we'll take care of the rest.",
      welcomePortal:
        'Welcome to our unique portal, which provides a full range of services for tourists in Uzbekistan!',
      firstButton: 'All hotels',
      secondButton: 'Watch video',
      header: {
        firstWord: 'Find accommodation',
        secondWord: 'Where to go?',
        thirdWord: 'Tours',
        forthWord: 'Transport',
        fifthWord: 'Profile',
        sixWord: 'Login',
      },

      usd: 'USD',
      uzs: 'UZS',
    },
  },
  ru: {
    translation: {
      packSuit: 'Собирай чемодан, остальное мы возьмем на себя',
      welcomePortal:
        'Добро пожаловать на наш уникальный портал, который предоставляет полный спектр услуг для туристов в Узбекистане!',
      firstButton: 'Все отели',
      secondButton: 'Посмотреть видео',
      header: {
        firstWord: 'Найти жилье',
        secondWord: 'Куда сходить?',
        thirdWord: 'Туры',
        forthWord: 'Транспорт',
        fifthWord: 'Профиль',
        sixWord: 'Войти',
      },
      usd: 'USD',
      uzs: 'UZS',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
