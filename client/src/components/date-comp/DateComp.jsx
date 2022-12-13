import React, { useState } from "react"
import { useParams } from "react-router-dom"
import DatePicker from "react-datepicker"
import axios from "axios"

import "react-datepicker/dist/react-datepicker.css"

const URL = "http://localhost:8080"
const DateComp = () => {
  let { id, day_id } = useParams()

  const [date, setDate] = useState(new Date())

  const onChange = async (date) => {
    // console.log("date", date)

    const { data } = await axios.get(`${URL}/users/${id}/day/${day_id}`)
    setDate(date)
  }
  return <DatePicker selected={date} onChange={onChange} />
}

export default DateComp
