import React, { useEffect, useState } from "react";
import Carousel from 'better-react-carousel'

// style
import './navbar.scss'

//translation
import "../../../i18next"
import { useTranslation } from "react-i18next";
import GET from "../../../API/GET";

export default function Navbar() {

  const {t, i18n} = useTranslation()
  const [data, setData] = useState([])

  const useCategory = async () => {
    try {
      const category = await GET.category()
      setData(category.data)
    }catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() =>{
    useCategory()
  }, [])

  return(
    <section className="nav">
      <h2 className="nav__title">{t ('yangilik')}</h2>
      <ul className="nav__list">
        <Carousel cols={7} rows={1} scrollSnap="true">
          {
            data.map((item, key) => {
              return(
                <Carousel.Item className="nav__item" key={key+512}>
                  <button className="nav__btn">{item.name_uz}</button>
                </Carousel.Item>
              )
            })
          }
          </Carousel>
      </ul>
    </section>
  )
}