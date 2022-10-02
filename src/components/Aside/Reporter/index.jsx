import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../../i18next'
// style
import './reporter.scss'


export default function Reporter() {
  let {t, i18n} = useTranslation()

  return(
    <div className="reporter">
      <p className="reporter__text"><i className='bx bx-pen'></i>{t ("muhbirga")}</p>
      <div className="reporter__box">
        <p className="reporter__desc">{t ("masofadan")}</p>
        <Link className="reporter__link" to="/">{t ("batafsil")}</Link>
      </div>
    </div>
  )
}