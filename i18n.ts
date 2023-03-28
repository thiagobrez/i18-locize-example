import i18n, {ModuleType} from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-locize-backend';
import * as RNLocalize from 'react-native-localize';
import {LOCIZE_PROJECT_ID, LOCIZE_API_KEY} from 'react-native-dotenv';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  detect: (callback: (lng: string) => void) => {
    const languageCode = RNLocalize.getLocales()[0].languageCode;
    return callback(languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      projectId: LOCIZE_PROJECT_ID,
      apiKey: LOCIZE_API_KEY,
      referenceLng: '[LNG]',
    },
  });

export default i18n;
