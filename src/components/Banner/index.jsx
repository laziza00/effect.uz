import React from "react";

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";

// style
import './banner.scss'

// images
import apple from '../../assets/images/apple-banner.jpg'
import google from '../../assets/images/google-banner.jpg'

export default function Banner() {

  const {t, i18n} = useTranslation()

  return (
    <section className="banner">
      <p className="banner__text">{t ('har-doim')}</p>
      <p className="banner__desc">{t ('kochirib')}</p>
      <div className="banner__box">
        <a href="/" target="_blank"><img className="banner__img" src={apple} alt="apple" /></a>
        <a href="/" target="_blank"><img className="banner__img" src={google} alt="GoogelPlay" /></a>
      </div>
    </section>
  )
}