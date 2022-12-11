import React, { useState } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

const DateComp = () => {
  const [date, setDate] = useState(new Date())

  function onChange(date) {
    setDate(date)
  }
  return <DatePicker selected={date} onChange={onChange} />
}

export default DateComp
