import tr_TR from "./tr_TR.json"
import en_US from "./en_US.json"
import de_DE from "./de_DE.json"
import es_ES from "./es_ES.json"
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
    tr: tr_TR,
    en: en_US,
    de: de_DE,
    es: es_ES
};
const i18n = new I18n(translations);
// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode;
// i18n.locale = 'en'

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
i18n.locale = 'tr';

export default i18n