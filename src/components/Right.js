const Right = ({ tasks, setTasks, baseTasks, setBaseTasks }) => {

    const showButtons = (divID, e) => {
        e.stopPropagation();
        // Logic to remove all task menu 
        const buttons = document.querySelectorAll(".right .task .buttons");
        buttons.forEach((button) => {
            button.className = "noButtons";
        });

        // Logic to add selected task menu
        document.getElementById(divID).className = "buttons";
    }

    // Update array upon changing checkbox
    const updateCheckbox = (e, id) => {
        const updatedTasks = [...baseTasks];
        updatedTasks.forEach((task) => {
            if (task.id === id) {
                task.completed = e.target.checked;
            }
        })

        document.querySelector("#hideCompleted").checked = false;
        setTasks(updatedTasks);
        setBaseTasks(updatedTasks);
        // Update local storage
        localStorage.setItem("ultimateTodoTasks", JSON.stringify([...updatedTasks]));
    };

    // Delete the selected task
    const deleteTask = (id) => {
        const updatedTasks = baseTasks.filter(task => task.id !== id)

        document.querySelector("#hideCompleted").checked = false;
        setTasks(updatedTasks);
        setBaseTasks(updatedTasks);
        localStorage.setItem("ultimateTodoTasks", JSON.stringify([...updatedTasks]));
    };

    return ( 
        <div className="right">

            {
                (tasks !== []) && tasks.map((task) => {
                    return (
                        <div className="task" key={task.id}>
                            <div className="head">
                                <div className={task.completed === false ? "title" : "title completed"}>{task.title}</div>
                                <span className=" material-icons material-icons-outlined" onClick={(e) => showButtons(`button${task.id}`, e)}>more_horiz</span>
                            </div>
                            <div className={task.completed === false ? "description" : "description completed"}>{task.description}</div>
                            <div className="foot">
                                <div className="tags">
                                    {task.tags.includes(1) && <span className="material-icons" style={{color: "#D1E5F7"}}>circle</span>}
                                    {task.tags.includes(2) && <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>}
                                    {task.tags.includes(3) && <span className="material-icons" style={{color: "#D9F1D5"}}>circle</span>}
                                    {task.tags.includes(4) && <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>}
                                </div>
                                <div>
                                    <input type="checkbox" name="done" defaultChecked={task.completed} onChange={(e) => {updateCheckbox(e, task.id)}} />
                                    <label htmlFor="done">Done</label>
                                </div>
                            </div>
                            <div className="noButtons" id={"button" + task.id}>
                                {/* <div className="edit button">Edit</div>
                                <div className="divide"></div> */}
                                <div className="delete button" onClick={() => {deleteTask(task.id)}}>Delete</div>
                            </div>
                        </div>
                    );
                })
            }

        </div>
     );
}
 
export default Right;