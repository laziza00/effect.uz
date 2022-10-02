import React from "react";
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
//style
import './Informer.scss'
import InformerItem from "./Informer";
import AsideHeader from "../../Aside/Header";

export default function Informer() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <AsideHeader />
            <InformerItem />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}