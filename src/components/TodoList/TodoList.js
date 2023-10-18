import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";


const TodoList = (props) => {

    return (
        <div>
            <div className="main-div__list">
                {props.todoList.map((todoList) => (
                    <TodoItem key={todoList.id} id={todoList.id} text={todoList.text} onDelete={props.onDeleteItem}>{todoList.text}</TodoItem>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
