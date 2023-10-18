import { useState } from "react";
import Button from "../TodoButton/Button";
import styles from "./TodoInput.module.css";

const TodoInput = (props) => {
    const [enteredText, setEnteredText] = useState("");
    const [isValid, setIsValid] = useState(true);

    const enteredTextHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredText(event.target.value);
    };

    const SubmitFormHandler = (event) => {
        event.preventDefault();
        if (enteredText.trim().length === 0) {
            setIsValid(false);
            return;
        }

        setEnteredText("");
        props.addTodo(enteredText);
    };

    return (
        <form onSubmit={SubmitFormHandler}>
            <div className={`${styles["sub-div"]} ${!isValid && styles.invalid}`}>
                <p className="sub-div__text">Todo List</p>
                <div className="input_div">
                    <input
                        type="text"
                        value={enteredText}
                        onChange={enteredTextHandler}
                    />
                </div>
                <Button type="submit">Add Task</Button>
            </div>
        </form>
    );
};

export default TodoInput;
