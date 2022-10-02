import React from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import NewsL from "./NewsL";

// style
import './newslenta.scss'


export default function NewsLenta() {

  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <div className="main__box">
              <NewsL />
            </div>
          </div>
          <Aside />
        </div>
        <Footer />
      </div>
    </>
  )
}