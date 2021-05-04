import { useState, useEffect } from "react";
import Header from "./Header.js";
import Left from "./Left.js";
import Right from "./Right.js";

const Home = () => {
    const [tasks, setTasks] = useState([
        // id: 1,
        // title: "Use todo app",
        // description: "Start using the todo app",
        // tags: [1, 4],
        // completed: true
    ]);
    const [baseTasks, setBaseTasks] = useState([]);
    const [selectedTag, setSelectedTag] = useState([]);

    // Fetch tasks from local storage initially
    useEffect(() => {
        if (localStorage.getItem("ultimateTodoTasks") !== null) {
            setTasks(JSON.parse(localStorage.getItem("ultimateTodoTasks")));
            setBaseTasks(JSON.parse(localStorage.getItem("ultimateTodoTasks")));
        };
    }, []);

    const minimizeTasksMenu = () => {
        const buttons = document.querySelectorAll(".right .task .buttons");
        buttons.forEach((button) => {
            button.className = "noButtons";
        });
    }

    return ( 
        <div className="home" onClick={minimizeTasksMenu}>
            <Header tasks={tasks} setTasks={setTasks} baseTasks={baseTasks} setBaseTasks={setBaseTasks} />
            <div className="main">
                <Left tasks={tasks} setTasks={setTasks} baseTasks={baseTasks} setBaseTasks={setBaseTasks} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                <Right tasks={tasks} setTasks={setTasks} baseTasks={baseTasks} setBaseTasks={setBaseTasks} />
            </div>
        </div>
     );
}
 
export default Home;