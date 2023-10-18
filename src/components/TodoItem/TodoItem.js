import "./TodoItem.css";

const TodoItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id)
    };

    return (
        <div>
            <div className="todo-div" onClick={deleteHandler}>
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default TodoItem;
