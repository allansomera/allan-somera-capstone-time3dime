import "./Users.scss"
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react"

import { Routes, Route, useLocation } from "react-router-dom"
import Homepage from "@/pages/homepage/Homepage"

const Users = () => {
  return (
    <>
      <Routes>
        // <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default Users
