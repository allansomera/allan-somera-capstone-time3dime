import "./Homepage.scss"

import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

// import TimeblockContainer from "@/components/TimeblockContainer"
import TimeblockContainer from "@/components/timeblock-container/TimeblockContainer"
import DateComp from "@/components/date-comp/DateComp"

// const tags = [
//   { id: uuidv4(), name: "sleep" },
//   { id: uuidv4(), name: "work" },
//   { id: uuidv4(), name: "gym" },
//   { id: uuidv4(), name: "eat" },
//   { id: uuidv4(), name: "free" },
// ]

const URL = "http://localhost:8080"
// const u_id = "2922c286-16cd-4d43-ab98-c79f698aeab0"

const getObject = (timeblocks, dest) => {
  return timeblocks.filter((o) => {
    return o.day_timeblock_id === dest
  })
}

const onDragEnd = (
  result,
  timeblocks,
  tagsColumn,
  setTimeblocks,
  setTagsColumn
) => {
  if (!result.destination) return
  // console.log("slots", slots)
  const { source, destination } = result
  console.log("result", result)
  console.log("source", source)
  console.log("destination", destination)
  let sourceColumn = {}
  let destColumn = {}
  if (source.droppableId !== destination.droppableId) {
    if (tagsColumn.hasOwnProperty(source.droppableId)) {
      // console.log("has property", tagsColumn.hasOwnProperty(source.droppableId))
      sourceColumn = tagsColumn[source.droppableId]
      destColumn = getObject(timeblocks, destination.droppableId)[0]
      const destTarget_idx = timeblocks.findIndex(
        (o) => o.day_timeblock_id === destination.droppableId
      )
      const sourceItems = [...sourceColumn.tags]
      const [removed] = sourceItems.splice(source.index, 1)
      const destColumn_copy = {
        ...destColumn,
        type: removed.type,
      }
      const new_timeblocks = [...timeblocks]
      new_timeblocks[destTarget_idx] = destColumn_copy
      setTimeblocks(new_timeblocks)
      setTagsColumn(tagsColumn)
    } else {
      sourceColumn = getObject(timeblocks, source.droppableId)[0]
      destColumn = getObject(timeblocks, destination.droppableId)[0]

      // find source index
      const sourceTarget_idx = timeblocks.findIndex(
        (o) => o.day_timeblock_id === source.droppableId
      )
      // find destination index
      const destTarget_idx = timeblocks.findIndex(
        (o) => o.day_timeblock_id === destination.droppableId
      )

      // change source timeslot type to null
      const sourceColumn_copy = {
        ...sourceColumn,
        type: null,
      }

      // change destination timeslot to a copu of the source
      const destColumn_copy = {
        ...destColumn,
        type: sourceColumn.type,
      }
      const new_timeblocks = [...timeblocks]
      new_timeblocks[sourceTarget_idx] = sourceColumn_copy
      new_timeblocks[destTarget_idx] = destColumn_copy
      setTimeblocks(new_timeblocks)
    }
  } else {
    // console.log("same droppableId")
    // console.log("result", result)
    // console.log("source", source)
    // console.log("destination", destination)
    // sourceColumn = getObject(timeblocks, source.droppableId)
    // destColumn = getObject(timeblocks, destination.droppableId)
    // const [removed] = copiedItems.splice(source.index, 1)
    // copiedItems.splice(destination.index, 0, removed)
    // setSlots({
    //   ...slots,
    //   [source.droppableId]: {
    //     ...slot,
    //     tags: copiedItems,
    //   },
    // })
  }
}

const backend_tags = await axios.get(`${URL}/users/1/tags`)

const tagSlot = {
  [uuidv4()]: {
    slot: "tags",
    tags: backend_tags.data,
  },
}

const Homepage = () => {
  const { id, day_id } = useParams()
  const params = useParams()

  const [timeblocks, setTimeblocks] = useState([])
  // const [usertags, setUserTags] = useState([])
  const [tagsColumn, setTagsColumn] = useState(tagSlot)

  useEffect(() => {
    const getTimeblocks = async () => {
      const { data } = await axios.get(`${URL}/users/${id}/day/${day_id}`)
      // console.log("data", data)
      // if (!data) console.log(`no data for user ${id} for ${day_id} `)
      setTimeblocks(data)
      // setUserTags(tags.data)
    }
    getTimeblocks()
  }, [])

  useEffect(() => {
    const getTimeblocks = async () => {
      const { data } = await axios.get(`${URL}/users/${id}/day/${day_id}`)
      // console.log("data", data)
      // if (!data) console.log(`no data for user ${id} for ${day_id} `)
      setTimeblocks(data)
      // setUserTags(tags.data)
    }
    getTimeblocks()
  }, [params])

  const btn_handler = async () => {
    const payload = { day_data: timeblocks }
    const res = await axios.patch(`${URL}/users/${id}/day/${day_id}`, payload)
    console.log(res)
  }

  // console.log(slots)
  // console.log(Object.entries(slots))
  // onDragEnd={(result) => onDragEnd(result, slots, setSlots)}

  // useEffect(() => {
  //   // console.log("current state of slots", slots)
  //   console.log("current state of timeblock", timeblocks)
  //   console.log("current state of usertags", usertags)
  // }, [usertags, timeblocks])
  return (
    <>
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(
            result,
            timeblocks,
            tagsColumn,
            setTimeblocks,
            setTagsColumn
          )
        }
      >
        <div className="homepage">
          <div className="testcolumn">
            <div className="datepicker">
              <DateComp />
            </div>
            <div className="tc_button">
              <button onClick={() => btn_handler()}>SAVE</button>
            </div>
          </div>
          <div className="column1">
            {timeblocks.map((droppable_item) => {
              return <TimeblockContainer droppable_item={droppable_item} />
            })}
          </div>
          <div className="column2">
            {Object.entries(tagSlot).map(([id, slot]) => {
              return (
                <div className="timeslot" key={id}>
                  <h2>{slot.slot}</h2>
                  <Droppable key={id} droppableId={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 200,
                            minHeight: 50,
                          }}
                        >
                          {slot.tags.map((item, index) => {
                            return (
                              <Draggable
                                key={item.usertag_id}
                                draggableId={String(item.usertag_id)}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "30px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#000000"
                                          : "#456c86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.type}
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              )
            })}
          </div>
        </div>
      </DragDropContext>
    </>
  )
}

export default Homepage
