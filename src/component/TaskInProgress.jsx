function TaskInProgress({todo, handleDelete, todoEnd}){
    //state
    //component

    //render
    return (
        <li>{todo.name}
            <button onClick={() => handleDelete(todo.id)}>X</button>
            <button onClick={() => todoEnd(todo.id)}>✔</button>
        </li>
    )
}

export default TaskInProgress;