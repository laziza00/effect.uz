import React from "react";
import { useTranslation } from "react-i18next";
import '../../i18next'

export default function Asides() {
  const {t, i18n} = useTranslation()

  return (
    <div className="aside__box">
      <div className="maside__desc aside__mb">
        <i className='bx bx-gift'></i>
        {t ("aside")}
      </div>
      <div className="maside__pricebox">
        <p className="maside__price">$8<span className="maside__price-span">/{t ("oyiga")}</span></p>
        <button className="maside__btn">{t ("yangilash")}</button>
      </div>
    </div>
  )
}