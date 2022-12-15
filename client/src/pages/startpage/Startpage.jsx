import "./Startpage.scss"
import React from "react"
import { Link } from "react-router-dom"

const Startpage = () => {
  return (
    <>
      <div className="startpage">
        <div className="links">/Github</div>
        <div className="links">
          <Link to="/user/1/day/1">_TimeTripleDime</Link>
        </div>
        <div className="links">/LinkedIn</div>
        <div className="links">/Github</div>
        <div className="links">
          <Link to="/user/1/day/1">_TimeTripleDime</Link>
        </div>
        <div className="links">/LinkedIn</div>
      </div>
      <div className="logo">
        <div className="logo__name">ALLAN</div>
        <div className="logo__name">SOMERA</div>
      </div>
    </>
  )
}

export default Startpage
