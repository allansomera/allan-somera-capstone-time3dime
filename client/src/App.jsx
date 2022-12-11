import "./App.scss"
import React, { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"

// import TimeblockContainer from "./components/timeblock-container/TimeblockContainer"
import TimeblockContainer from "@/components/timeblock-container/TimeblockContainer"
import Users from "@/pages/users/Users"

const App = () => {
  const u_id = "2922c286-16cd-4d43-ab98-c79f698aeab0"
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to={`/users/${u_id}`} replace />} />
        <Route path="/users/*" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
