import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState({
    language: 'en'
  });

  const handleInputChange = event => {
    const target = event.target
    console.log(target)
    i18n.changeLanguage(target.value)

    setValues(oldValues => ({
      ...oldValues,
      [target.name]: target.value,
    }));
  }

  return(
    <select
      value={values.language}
      onChange={(e) => handleInputChange(e)}
    >
      <option value={'en'}>EN</option>
      <option value={'es'}>ES</option>
    </select>
  )
}

export default LanguageMenu
