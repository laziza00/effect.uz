import React from "react";
import Asides from "./Aside";

// style
import './aside.scss'
import AsideHeader from "./Header";
import Reporter from "./Reporter";
import TopRead from "./TopRead";
import AsideWeather from "./Weather";

export default function Aside() {
  return(
    <section className="aside">
      <AsideHeader />
      <AsideWeather />
      <Reporter />
      <TopRead />
      <Asides />
    </section>
  )
}