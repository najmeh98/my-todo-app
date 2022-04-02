import styled from "styled-components";
import { Todoprop } from "../pages";
import { TodoTask } from "./TodoTask";

interface todoListTask {
  filterTodo: any;
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
  return (
    <>
      {filterTodo.map((item: Todoprop, index: number) => (
        <TodoTask
          key={item.id}
          item={item}
          onDeleteTask={() => onDeleteTask(item.id)}
          onChangeTask={() => onChangeTask(item.value, item.id)}
          onCompleteTask={() => CompleteHandler(item.id)}
          checked={item.completed === true}
        />
      ))}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
