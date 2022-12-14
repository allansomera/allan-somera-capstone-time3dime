import "./TimeblockContainer.scss"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import TimeblockItem from "../timeblockitem/TimeblockItem"

const TimeblockContainer = ({ droppable_item, getColor }) => {
  const id = droppable_item.day_timeblock_id
  return (
    <div className="timeblockcontainer" key={id}>
      <Droppable key={id} droppableId={id}>
        {(provided, snapshot) => {
          return (
            <>
              <div
                className="dropContainer"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  // padding: 4,
                  // width: 200,
                  minHeight: 60,
                }}
              >
                <div className="border">
                  <TimeblockItem item={droppable_item} getColor={getColor} />
                </div>
                {provided.placeholder}
              </div>
              {/* * <div className="dropContainer__timeCon">1</div>
               */}
            </>
          )
        }}
      </Droppable>
    </div>
  )
}

export default TimeblockContainer
