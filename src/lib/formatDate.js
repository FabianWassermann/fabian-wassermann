import i18next from 'i18next'

export function formatDate(dateString, explicitLocale) {
  const activeLang = (explicitLocale || i18next.language || 'en').toLowerCase()
  const locale = activeLang.startsWith('de') ? 'de-DE' : 'en-US'

  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
