import React from "react";
import { useTranslation } from "react-i18next";
import '../../../i18next'
// style
import './mainaside.scss'

export default function MainAside() {
  const {t, i18n} = useTranslation()

  return (
    <section className="maside">
      <div className="maside__desc">
        <i className='bx bx-gift' ></i>
        {t ("aside")}
      </div>
      <div className="maside__pricebox">
        <p className="maside__price">$8<span className="maside__price-span">/{t ("oyiga")}</span></p>
        <button className="maside__btn">{t ("yangilash")}</button>
      </div>
    </section>
  )
}