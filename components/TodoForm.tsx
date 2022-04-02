import { CSSProperties, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Todoprop } from "../pages";
import { useTheme } from "./Context/ThemeContext";
import { Row } from "./shared/Container";

// type Props = {
//   type: string;
//   placeholder?: string;
//   value: string;
//   setValue: () => void;
//   style?: CSSProperties | undefined;
//   width?: number;
// };

type Props = {
  listTodos: any;
  setListTodos: ([]) => void;
};

export const TodoForm = ({ listTodos, setListTodos }: Props) => {
  let theme = useTheme();
  const [todoValue, setTodoValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setListTodos([
      ...listTodos,
      { value: todoValue, completed: false, id: Math.random() * 1000 },
    ]);
    setTodoValue("");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Input
          value={todoValue}
          onChange={changeHandler}
          type="text"
          placeholder="Search your todo"
          style={{
            background: theme.color.InputBgcolor,
            boxShadow: theme.boxShadow,
            borderTopLeftRadius: theme.borderRadius,
            borderBottomLeftRadius: theme.borderRadius,
            height: theme.height,
            padding: theme.padding,
          }}
        />
        <Button
          style={{
            background: theme.color.buttoncolor,
            color: theme.color.textcolor,
            borderTopRightRadius: theme.borderRadius,
            borderBottomRightRadius: theme.borderRadius,
          }}
        >
          Add
        </Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  /* max-width: 700px; */
  width: 100%;

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  /* height: 40px; */
  color: rgb(10, 60, 73);
  &::placeholder {
    color: rgb(10, 60, 73);
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  height: 40px;
  cursor: pointer;
`;
