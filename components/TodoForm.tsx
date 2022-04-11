import {
  CSSProperties,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Todoprop } from "../pages";
import { useTheme } from "./Context/ThemeContext";
import { StandardInput } from "./Input";
import { Row } from "./shared/Container";

type Props = {
  item: { value: string; id: number };
  listTodos: any;
  setListTodos: ([]) => void;
  isEditing: boolean;
};

export const TodoForm = ({
  listTodos,
  item,
  setListTodos,
  isEditing,
}: Props) => {
  let theme = useTheme();
  const [todoValue, setTodoValue] = useState<string>(item?.value || "");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setTodoValue(value);
  };

  // const submitEditHandler = (value: string) => {
  //   if (todoValue && item) {
  //     onChangeTask(todoValue, item?.id);
  //   }
  // };
  console.log(todoValue);

  // const onSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   if (todoValue) submitHandler(todoValue, item?.id);
  //   setTodoValue("");
  //   if (isEditing) {
  //     setIsEditing(false);
  //   }
  //   // setIsOpen(false);
  // };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setListTodos([
      ...listTodos,
      {
        value: todoValue,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setTodoValue("");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <StandardInput
          value={todoValue}
          onChange={changeHandler}
          type="text"
          placeholder="Search your todo"
        />
        {isEditing ? (
          <Button
            style={{
              background: theme.color.buttoncolor,
              color: theme.color.textcolor,
              borderTopRightRadius: theme.borderRadius,
              borderBottomRightRadius: theme.borderRadius,
            }}
          >
            Save
          </Button>
        ) : (
          <Button
            style={{
              background: theme.color.buttoncolor,
              color: theme.color.textcolor,
              borderTopRightRadius: theme.borderRadius,
              borderBottomRightRadius: theme.borderRadius,
            }}
            // onClick={submitHandler}
          >
            Add
          </Button>
        )}
      </Form>
    </>
  );
};

export const Form = styled.form`
  /* max-width: 700px; */
  width: 100%;

  display: flex;
  align-items: center;
  /* margin: 20px 0px; */
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  /* height: 40px; */
  color: rgb(10, 60, 73);
  &::placeholder {
    color: rgb(10, 60, 73);
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  height: 40px;
  cursor: pointer;
`;
