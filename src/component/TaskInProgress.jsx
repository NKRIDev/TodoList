import "../styles/TaskInProgress.css"

function TaskInProgress({todo, handleDelete, todoEnd}){
    //state
    //component

    //render
    return (
        <li className="task">{todo.name}
            <div className="manage-button">
                <button onClick={() => todoEnd(todo.id)}>✔</button>
                <button onClick={() => handleDelete(todo.id)}>X</button>
            </div>
        </li>
    )
}

export default TaskInProgress;