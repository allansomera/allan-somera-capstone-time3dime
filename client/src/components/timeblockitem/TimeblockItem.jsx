import "./TimeblockItem.scss"
import { Draggable } from "@hello-pangea/dnd"

const TimeblockItem = ({ item }) => {
  return (
    item.type && (
      <Draggable
        key={item.day_timeblock_id}
        draggableId={item.day_timeblock_id}
        index={0}
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
                minHeight: "10px",
                backgroundColor: snapshot.isDragging ? "#000000" : "#456c86",
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
  )
}
export default TimeblockItem
