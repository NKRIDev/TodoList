import React, {useState} from "react";
import "./styles/app.css"
import TaskForm from "./component/TaskForm.jsx";
import TaskEnd from "./component/TaskEnd.jsx";
import TaskInProgress from "./component/TaskInProgress.jsx";

function App() {

    //State
    const [todoList, setTodoList] = useState([
        {id: 0, name: "Acheter à manger pour le chat"},
        {id: 1, name: "Chercher ma fille à l'école"},
        {id: 2, name:"Nourriture le chien"},
        {id: 3, name:"Faires mes exos de maths"},
    ]);

    const [finish, setFinish] = useState([]);

    //component
    const handleDelete = (id) =>{
        const newTodoList = [...todoList];
        const filterList = newTodoList.filter((todo) => todo.id !== id);
        setTodoList(filterList);
    }

    const handAddFinish = (id) =>{
        const filteredItem = todoList.find((item) => item.id === id);
        const updatedFinishList = [...finish, filteredItem];
        setFinish(updatedFinishList);
    }

    const todoEnd = (id) =>{
        handAddFinish(id);
        handleDelete(id);
    }

    const handleAdd = (objetTask) => {
        const copyTask = [...todoList];

        copyTask.push(objetTask);
        setTodoList(copyTask);
    };

    //render
    return (
        <main>
            <TaskForm
                handleAdd={handleAdd}
            />

            <h1>Tâche(s) encours - {todoList.length}</h1>
            <ul>
                {todoList.map((todo) => {
                    return <TaskInProgress
                        todo={todo}
                        handleDelete={handleDelete}
                        todoEnd={todoEnd}/>
                })}
            </ul>

            <h1>Terminés</h1>
            <ul>
                {finish.map((todoEnd) => {
                    return <TaskEnd
                        todoEnd={todoEnd}
                    />
                })}
            </ul>
        </main>
    )
}

export default App;