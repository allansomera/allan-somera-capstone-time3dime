import "./App.scss"
import React, { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

import TimeblockContainer from "./components/timeblock-container/TimeblockContainer"

const itemsFromBackend = [
  { id: uuidv4(), content: "First task" },
  { id: uuidv4(), content: "Second task" },
]

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Todo",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "Todo2",
    items: [],
  },
}

const tags = [
  { id: uuidv4(), name: "sleep" },
  { id: uuidv4(), name: "work" },
  { id: uuidv4(), name: "gym" },
  { id: uuidv4(), name: "eat" },
  { id: uuidv4(), name: "free" },
]

const timeSlots = {
  [uuidv4()]: {
    slot: "1",
    tags: [{ id: uuidv4(), name: "sleep" }],
  },
  [uuidv4()]: {
    slot: "2",
    tags: [],
  },
  [uuidv4()]: {
    slot: "3",
    tags: [],
  },
  [uuidv4()]: {
    slot: "4",
    tags: [],
  },
  [uuidv4()]: {
    slot: "5",
    tags: [],
  },
  [uuidv4()]: {
    slot: "6",
    tags: [],
  },
  [uuidv4()]: {
    slot: "7",
    tags: [],
  },
  [uuidv4()]: {
    slot: "8",
    tags: [],
  },
  [uuidv4()]: {
    slot: "9",
    tags: [],
  },
  [uuidv4()]: {
    slot: "10",
    tags: [],
  },
  [uuidv4()]: {
    slot: "11",
    tags: [],
  },
  [uuidv4()]: {
    slot: "12",
    tags: [],
  },
}

const tagSlot = {
  [uuidv4()]: {
    slot: "tags",
    tags: tags,
  },
}

const URL = "http://localhost:8080"
const u_id = "2922c286-16cd-4d43-ab98-c79f698aeab0"

const onDragEnd = (result, slots, tagsColumn, setSlots, setTagsColumn) => {
  if (!result.destination) return
  console.log("slots", slots)
  const { source, destination } = result
  console.log("result", result)
  console.log("source", source)
  console.log("destination", destination)
  let sourceColumn = {}
  let destColumn = {}
  if (source.droppableId !== destination.droppableId) {
    // console.log("has property", tagsColumn.hasOwnProperty(source.droppableId))
    if (tagsColumn.hasOwnProperty(source.droppableId)) {
      sourceColumn = tagsColumn[source.droppableId]
      destColumn = slots[destination.droppableId]
      const sourceItems = [...sourceColumn.tags]
      const destItems = [...destColumn.tags]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      // keep the remaining slot items but only target the destination
      const destitems_copy = [...destItems]
      const tag = destitems_copy[0].name
      console.log("destitems_copy", destitems_copy[0].name)
      setSlots({
        ...slots,
        [destination.droppableId]: {
          ...destColumn,
          tags: [{ id: uuidv4(), name: tag }],
        },
      })
      setTagsColumn(tagsColumn)
      // console.log("current state of slots", slots)
    } else {
      sourceColumn = slots[source.droppableId]
      destColumn = slots[destination.droppableId]
      const sourceItems = [...sourceColumn.tags]
      const destItems = [...destColumn.tags]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setSlots({
        ...slots,
        [source.droppableId]: {
          ...sourceColumn,
          tags: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          tags: destItems,
        },
      })
    }
  } else {
    console.log("same droppableId")
    const slot = slots[source.droppableId]
    const copiedItems = [...slot.tags]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setSlots({
      ...slots,
      [source.droppableId]: {
        ...slot,
        tags: copiedItems,
      },
    })
  }
}

function App() {
  const [slots, setSlots] = useState(timeSlots)
  const [tagsColumn, setTagsColumn] = useState(tagSlot)
  const [timeblocks, setTimeblocks] = useState([])

  // console.log(slots)
  // console.log(Object.entries(slots))
  // onDragEnd={(result) => onDragEnd(result, slots, setSlots)}
  useEffect(() => {
    console.log("current state of slots", slots)
    console.log("current state of timeblock", timeblocks)
  }, [slots, timeblocks])

  useEffect(() => {
    const getTimeblocks = async () => {
      const { data } = await axios.get(`${URL}/users/${u_id}/days/2`)
      setTimeblocks(data)
    }
    getTimeblocks()
  }, [])

  return (
    <>
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, slots, tagsColumn, setSlots, setTagsColumn)
        }
      >
        <div className="app">
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
                                key={item.id}
                                draggableId={item.id}
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
                                      {item.name}
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

export default App
