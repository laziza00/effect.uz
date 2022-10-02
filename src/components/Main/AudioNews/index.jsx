import React from "react";
import Aside from "../../Aside";
import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import AudioN from "./AudioNews";

// style
import './audionews.scss'

export default function AudioNews() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <div className="main__box">
              <AudioN />
            </div>
          </div>
          <Aside />
        </div>
        <Footer />
      </div>
    </>
  )
}