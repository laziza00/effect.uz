import React from "react";
import Aside from "../../Aside";
import Footer from "../../Footer";
import Header from "../../Header";

// style
import '../../NewsLenta/newslenta.scss'
import Sidebar from "../../Sidebar";
import VideoItems from "./VideoItems";

export default function AllVideoN() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <div className="main__box">
              <VideoItems />
            </div>
          </div>
          <Aside />
        </div>
        <Footer />
      </div>
    </>
  )
}