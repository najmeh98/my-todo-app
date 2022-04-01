import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Row } from "../components/shared/Container";
import { Space } from "../components/shared/Space";
import SideBar from "../components/SideBar";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import styles from "../styles/Home.module.css";
export interface Todoprop {
  // map(arg0: () => void): import("react").ReactNode;
  id: number;
  value: string;
  completed: boolean;
}

const Home: NextPage = () => {
  const [listTodos, setListTodos] = useState<Todoprop[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [hasLoded, setHasLoded] = useState(false);
  const [filterTodo, setFilterTodo] = useState([]);
  //save list of tasks in localStorage
  useEffect(() => {
    if (hasLoded) {
      localStorage.setItem("list", JSON.stringify(listTodos));
    }
  }, [hasLoded, listTodos]);

  //get list of tasks in LocalStorage
  useEffect(() => {
    if (!hasLoded) {
      let savedTask = localStorage.getItem("list");
      if (savedTask) {
        setListTodos(JSON.parse(savedTask));
      }
    }
    setHasLoded(true);
  }, [hasLoded]);

  //filterHandler
  const filterHandler = useCallback(() => {
    // setFilter(value);
    switch (filter) {
      case "Completed":
        setFilterTodo(listTodos.filter((task) => task.completed));
        break;
      case "Uncompleted":
        setFilterTodo(listTodos.filter((task) => !task.completed));
        break;
      default:
        setFilterTodo(listTodos);
        break;
    }
  }, [filter, listTodos]);

  useEffect(() => {
    filterHandler();
  }, [filter, filterHandler, listTodos]);

  const handleDeleteTask = (id: number) => {
    let index = listTodos.findIndex((p) => p.id === id);
    setListTodos([...listTodos.slice(0, index), ...listTodos.slice(index + 1)]);
  };

  const handleChangeTask = (value: string, id: number) => {
    let index = listTodos.findIndex((p) => p.id === id);
    let text = listTodos[index].value;
    setListTodos([
      ...listTodos.slice(0, index),
      { ...listTodos[index], value: text },
      ...listTodos.slice(index + 1),
    ]);
  };

  const CompleteHandler = (id: number) => {
    setListTodos(
      listTodos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <MainContainer>
          <Row>
            <TodoForm listTodos={listTodos} setListTodos={setListTodos} />
            <Space vertical={20} />
            <TodoList
              filterTodo={filterTodo}
              onDeleteTask={handleDeleteTask}
              onChangeTask={handleChangeTask}
              CompleteHandler={CompleteHandler}
            />
          </Row>
          <SideBar />
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  background-color: #0c4a6e;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  height: 100%;
  padding: 8px;
  width: 100%;
`;
const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 600px;
  /* align-items: center; */
  justify-content: space-between;
  gap: 20px;
`;
