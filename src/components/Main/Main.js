import { TodoForm } from "./TodoForm/TodoForm";
import { TodoHeader } from "./TodoHeader/TodoHeader";
import { TodoList } from "./TodoList/TodoList";

export const Main = () => {
  return (
    <main className="main-container mt-10 d-flex justify-center">
      <div className="wrapper bg-white p-10">
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </div>
    </main>
  );
};
