import "./App.scss"
import React, { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"

// import TimeblockContainer from "./components/timeblock-container/TimeblockContainer"
import TimeblockContainer from "@/components/timeblock-container/TimeblockContainer"
import Homepage from "@/pages/homepage/Homepage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/users/*" element={<Homepage key={1} />} />
      </Routes>
    </>
  )
}

export default App
