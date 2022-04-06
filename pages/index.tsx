import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Header } from "../components/Header";
import { Column, Row } from "../components/shared/Container";
import { Space } from "../components/shared/Space";
import SideBar from "../components/SideBar";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { Mobile, notdesktop, tablet } from "../utils/media";
export interface Todoprop {
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
  const filterHandler = useCallback(
    (filter) => {
      setFilter(filter);
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
    },
    [listTodos]
  );

  useEffect(() => {
    filterHandler(filter);
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
        {/* <Space vertical={50} /> */}
        <MainContainer>
          <Row>
            <Column>
              <TodoForm listTodos={listTodos} setListTodos={setListTodos} />
              <Space vertical={20} />

              <TodoList
                filterTodo={filterTodo}
                onDeleteTask={handleDeleteTask}
                onChangeTask={handleChangeTask}
                CompleteHandler={CompleteHandler}
              />
            </Column>
            {/* <img src="No data-cuate.png" alt="emptyTask" /> */}
          </Row>
          <SideBar
            filterHandler={filterHandler}
            setFilter={setFilter}
            filter={filter}
          />
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  /* overflow: hidden; */
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  background-color: #0c4a6e;
  /* background-color: #023047; */

  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  /* background-color: #b5838d; */
  border-radius: 0.375rem;
  /* overflow: hidden; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 50px;
  height: 100%;
  min-height: 100%;
  width: 100%;
  ${notdesktop(css`
    padding: 20px;
  `)}
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 360px;
  gap: 80px;
  justify-content: space-between;
  height: 100%;
  margin-top: 40px;
  justify-content: space-between;
  /* min-height: 600px; */

  /* display: flex;
  height: 100%; */

  ${tablet(css`
    grid-template-columns: 50% 330px;
    gap: 20px;
  `)}
  ${Mobile(css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  `)}
`;
