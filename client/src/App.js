import "./App.scss"
import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { v4 as uuidv4 } from "uuid"
const itemsFromBackend = [
  { id: uuidv4(), content: "First task" },

  {
    id: uuidv4(),
    content: "Second task",
  },
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
  {
    id: uuidv4(),
    name: "sleep",
  },
  {
    id: uuidv4(),
    name: "work",
  },
  {
    id: uuidv4(),
    name: "gym",
  },
  {
    id: uuidv4(),
    name: "eat",
  },
  {
    id: uuidv4(),
    name: "free",
  },
]

const timeSlots = {
  [uuidv4]: {
    slot: 0,
    tags: [],
  },
  [uuidv4]: {
    slot: 1,
    tags: [],
  },
  [uuidv4]: {
    slot: 2,
    tags: [],
  },
  [uuidv4]: {
    slot: 3,
    tags: [],
  },
  [uuidv4]: {
    slot: 4,
    tags: [],
  },
  [uuidv4]: {
    slot: 5,
    tags: [],
  },
  [uuidv4]: {
    slot: 6,
    tags: [],
  },
  [uuidv4]: {
    slot: 7,
    tags: [],
  },
  [uuidv4]: {
    slot: 8,
    tags: [],
  },
  [uuidv4]: {
    slot: 9,
    tags: [],
  },
  [uuidv4]: {
    slot: 10,
    tags: [],
  },
  [uuidv4]: {
    slot: 11,
    tags: [],
  },
  [uuidv4]: {
    slot: 12,
    tags: [],
  },
}

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    })
  }
}
function App() {
  const [columns, setColumns] = useState(columnsFromBackend)
  console.log(Object.entries(columns))
  // console.log(columns)
  return (
    <>
      <div className="app">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, column]) => {
            console.log(id, column)
            return (
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
                        width: 250,
                        minHeight: 500,
                      }}
                    >
                      {column.items.map((item, index) => {
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
                                  {item.content}
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
            )
          })}
        </DragDropContext>
      </div>
    </>
  )
}

export default App
