import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GET from "../../../API/GET";
import Aside from "../../Aside";
import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import MainAside from "../MainAside";
import News from "../News";
import { useParams } from "react-router-dom";
import HududItems from "./HududItem";

// style
import '../../NewsLenta/newslenta.scss'

export default function Hududlar() {
  let {id} = useParams()
  const { t, i18n } = useTranslation()
  const [category, setCategory] = useState([])


  const newsItem = async () => {
    try{
      const response = await GET.provence();
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
            <h2 className="main__title">{i18n.language === "uz" ? category.name : i18n.language === "ru" ? category.name : i18n.language === "kiril" ? category.name : category.name}</h2>
            <News />
            <MainAside />
            <HududItems />
          </div>
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  </>
  )
}