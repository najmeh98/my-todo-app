import { useState } from "react";
import styled from "styled-components";
import { Todoprop } from "../pages";
import { TodoTask } from "./TodoTask";

interface todoListTask {
  filterTodo: [];
  onDeleteTask: (id: number) => void;
  onChangeTask: (value: string, id: number) => void;
  CompleteHandler: (id: number) => void;
}

export const TodoList = ({
  filterTodo,
  onDeleteTask,
  onChangeTask,
  CompleteHandler,
}: todoListTask) => {
  const [editTodo, setEditTodo] = useState<Todoprop | null>(null);
  console.log(filterTodo);
  return (
    <>
      {filterTodo &&
        filterTodo?.length > 0 &&
        filterTodo?.map((item: Todoprop, index: number) => {
          console.log(item);
          return (
            <TodoTask
              key={item.id}
              item={item}
              onDeleteTask={() => onDeleteTask(item.id)}
              onChangeTask={onChangeTask}
              onCompleteTask={() => CompleteHandler(item.id)}
              checked={item.completed}
              LengthofTask={filterTodo.length}
            />
          );
        })}
    </>
  );
};

const EmptyTask = () => {
  return (
    <div>
      <p>todo list is empty dude!</p>
      <img src="" alt="emptytask" />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
