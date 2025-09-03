import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from '@/../public/locales/en/common.json'
import deCommon from '@/../public/locales/de/common.json'

const resources = {
  en: { common: enCommon },
  de: { common: deCommon },
}

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      defaultNS: 'common',
      ns: ['common'],
      interpolation: { escapeValue: false },
      returnEmptyString: false,
    })
}

export default i18next
