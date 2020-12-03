import i18next from 'i18next';

import * as config from '../../config/i18n';

import languageDetector from './language-detector';
import translationLoader from './translation-loader';

const i18n = {
    init: () => {
        return new Promise((resolve, reject) => {
            i18next
                .use(languageDetector)
                .use(translationLoader)
                .init({
                    fallbackLng: config.fallback,
                    ns: config.namespaces,
                    defaultNS: config.defaultNamespace,
                    interpolation: {
                        escapeValue: false
                    },
                }, (error) => {
                    if (error) { return reject(error); }
                });
        });
    },

    t: (key, options) => i18next.t(key, options),

    get locale() { return i18next.language; },

};

export const t = i18n.t;

export default i18n;
