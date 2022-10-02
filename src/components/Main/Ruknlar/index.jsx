import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GET from "../../../API/GET";
import Aside from "../../Aside";
import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import MainAside from "../MainAside";
import News from "../News";
import RukunItems from "./Rukunlar";

// style
import '../../NewsLenta/newslenta.scss'
import { useParams } from "react-router-dom";

export default function Rukunlar() {
  let {id} = useParams()
  const { t, i18n } = useTranslation()
  const [category, setCategory] = useState([])


  const newsItem = async () => {
    try{
      const response = await GET.category();
      setCategory(...response.data.filter(item => item.id == id))
    }catch(err) {
      console.log(err)
      return
    }
  }

  useEffect(()=> {
    newsItem()
  },[id])

  return(
    <>
    <div className='container'>
      <Header />
      <div className="dflex">
        <Sidebar />
        <div className="main">
          <div className="main__box">
            <h2 className="main__title">{i18n.language === "uz" ? category.name_uz : i18n.language === "ru" ? category.name_ru : i18n.language === "kiril" ? category.name_oz : category.name_uz}</h2>
            <News />
            <MainAside />
            <RukunItems />
          </div>
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  </>
  )
}