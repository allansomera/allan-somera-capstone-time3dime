import "./App.scss"
import React, { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"

// import TimeblockContainer from "./components/timeblock-container/TimeblockContainer"
import TimeblockContainer from "@/components/timeblock-container/TimeblockContainer"
import User from "@/pages/user/User"
import Startpage from "@/pages/startpage/Startpage"

const App = () => {
  const u_id = "1"
  return (
    <>
      <Routes>
        {/*
         * <Route path="*" element={<Navigate to={`/user/${u_id}`} replace />} />
         */}
        <Route path="*" element={<Navigate to={`/startpage`} replace />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/startpage" element={<Startpage />} />
      </Routes>
    </>
  )
}

export default App
