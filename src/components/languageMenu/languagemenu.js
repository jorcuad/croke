import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()

  var browserLanguage = i18n.language

  const handleInputChange = event => {
    const target = event.target
    browserLanguage = target.value
    i18n.changeLanguage(target.value)
  }

  return(
    <select
      name="Languages"
      onChange={(e) => handleInputChange(e)}
    >
      <option selected={browserLanguage === 'en'} value={'en'}>EN</option>
      <option selected={browserLanguage === 'es'} value={'es'}>ES</option>
    </select>
  )
}

export default LanguageMenu
