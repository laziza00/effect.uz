import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

// style
import './fotonews.scss'
import { Link } from "react-router-dom";

//translation
import "../../../i18next"
import { useTranslation } from "react-i18next";

export default function FotoNews() {

  const {t, i18n} = useTranslation()

  return (
    <section className="fotonews">
      <div className="fotonews__header">
        <h2 className="fotonews__title">{t ('ftyangi')}</h2>
        <button className="fotonews__btn">{t ('otish')}</button>
      </div>
      <Splide className="fotonews__list"
        options={{
          perPage: 3,
          perMove: 1,
          arrows: true,
          pagination: false,
          drag: 'free',
        }}>

        <SplideSlide className="fotonews__item">
          <Link className="fotonews__link" to="/">
            <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
            <div className="fotonews__box">
              <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
            </div>
          </Link>
        </SplideSlide>

        <SplideSlide className="fotonews__item">
            <Link className="fotonews__link" to="/">
              <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
              <div className="fotonews__box">
                <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
              </div>
           </Link>
        </SplideSlide>

        <SplideSlide className="fotonews__item">
            <Link className="fotonews__link" to="/">
              <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
              <div className="fotonews__box">
                <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
              </div>
           </Link>
        </SplideSlide>

        <SplideSlide className="fotonews__item">
            <Link className="fotonews__link" to="/">
              <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
              <div className="fotonews__box">
                <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
              </div>
           </Link>
        </SplideSlide>
        <SplideSlide className="fotonews__item">
            <Link className="fotonews__link" to="/">
              <img className="fotonews__img" src="https://picsum.photos/id/48/565/409" alt="asc" />
              <div className="fotonews__box">
                <h3 className="fotonews__subtitle">Samsung Galaxy F22 launched in India: Price, features, other details</h3>
              </div>
           </Link>
        </SplideSlide>
      </Splide>
    </section>
  )
}