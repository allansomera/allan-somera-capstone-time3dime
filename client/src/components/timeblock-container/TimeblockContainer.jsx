import "./TimeblockContainer.scss"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import TimeblockItem from "../timeblockitem/TimeblockItem"

const TimeblockContainer = ({ droppable_item }) => {
  const id = droppable_item.day_timeblock_id
  return (
    <div className="timeblockcontainer" key={id}>
      <Droppable key={id} droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                padding: 4,
                width: 200,
                minHeight: 50,
              }}
            >
              <TimeblockItem item={droppable_item} />
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  )
}

export default TimeblockContainer
