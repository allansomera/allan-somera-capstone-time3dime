import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import axios from "axios"

import "react-datepicker/dist/react-datepicker.css"

const URL = "http://localhost:8080"
const DateComp = () => {
  let { id, day_id } = useParams()
  let nav = useNavigate()

  const [date, setDate] = useState(new Date())
  const onChange = async (date) => {
    setDate(date)
    const [day, month, year] = date.toLocaleString().split(",")[0].split("/")
    const payload = {
      day,
      month,
      year,
    }
    const { data } = await axios.post(`${URL}/users/${id}/day/check`, payload)
    console.log("res data", data)
    if (!data.length) {
      const { new_data } = await axios.post(
        `${URL}/users/${id}/day/new`,
        payload
      )
      // nav(`/user/${id}/day/`)
    } else {
      // console.log("found timeslots")
    }
  }

  return <DatePicker selected={date} onChange={onChange} />
}

export default DateComp
