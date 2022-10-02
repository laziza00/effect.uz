import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

//style
import './sidebar.scss'

// icons
import logo from '../../assets/icons/logo.svg'



export default function Sidebar() {
  return (
    <section className="sidebar">
      <Nav />
    </section>
  )
}