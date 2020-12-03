export const fallback = 'en';

export const supportedLocales = {
  en: {
    name: 'English',
    translationFileLoader: () => require('../lang/en.json'),
    momentLocaleLoader: () => Promise.resolve()
  },
  de: {
    name: 'Deutsch',
    translationFileLoader: () => require('../lang/de.json'),
    momentLocaleLoader: () => import('moment/locale/de')
  },
  pl: {
    name: 'Polski',
    translationFileLoader: () => require('../lang/pl.json'),
    momentLocaleLoader: () => import('moment/locale/pl')
  },
  es: {
    name: 'Spanish',
    translationFileLoader: () => require('../lang/es.json'),
    momentLocaleLoader: () => import('moment/locale/es')
  }
};

export const defaultNamespace = 'Home';

export const namespaces = ['Home', 'Calendar', 'Settings', 'bottom'];
