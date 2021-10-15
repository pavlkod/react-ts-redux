import React, { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: FC = () => {
  const { todo, loading, error, page, limit } = useTypedSelector(state => state.todo);
  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page, limit]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {todo.map(item => (
        <div key={item.id}>
          {item.id}
          {item.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map(p => (
          <div
            style={{ border: `1px solid ${p === page ? "green" : "#f2f2f2"}`, padding: 10 }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
