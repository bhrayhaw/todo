import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";
import { useState } from "react";
import "./App.css";

const TodoLists = [
    { id: "1", text: "Do your exercise!" },
    { id: "2", text: "This is a todo list" },
    { id: "3", text: "This is a todo list" },
];

function App() {
    const [todo, setTodo] = useState(TodoLists);
    const addTodoHandler = (todo) => {
        setTodo((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.unshift({ text: todo, id: Math.random().toString() });
            return updatedTasks;
        });
    };

    const deleteItemHandler = (todoId) => {
        setTodo((prevTasks) => {
            const updatedTasks = prevTasks.filter((task) => task.id !== todoId);
            return updatedTasks;
        });
    };

    let content = <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '600'}}>No Tasks found. Add Task</p>;
    
    if(todo.length > 0){
      content = <TodoList todoList={todo} onDeleteItem={deleteItemHandler} />;
    }

    return (
        <div className="App">
            <TodoInput addTodo={addTodoHandler} />
            {content}
        </div>
    );
}

export default App;
