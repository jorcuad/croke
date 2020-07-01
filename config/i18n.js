// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  es: {
    path: `es`,
    locale: `es-ES`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `es`,
    ogLanguage: `es_ES`,
    defaultTitle: `Usando i18n con Gatsby`,
    defaultDescription: `Ejemplo de Gatsby usando MDX e i18n sin dependencias`,
  },
};
