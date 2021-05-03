import { useState } from "react";
import Header from "./Header.js";
import Left from "./Left.js";
import Right from "./Right.js";

const Home = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        title: "Use todo app",
        desciption: "Start using the todo app",
        tags: [1, 4],
        completed: true
    }]);

    const minimizeTasksMenu = () => {
        const buttons = document.querySelectorAll(".right .task .buttons");
        buttons.forEach((button) => {
            button.className = "noButtons";
        });
    }

    return ( 
        <div className="home" onClick={minimizeTasksMenu}>
            <Header setTasks={setTasks} />
            <div className="main">
                <Left />
                <Right tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
     );
}
 
export default Home;