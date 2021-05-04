import { useState } from "react";
import Modal from "react-modal";
import uuid from "react-uuid";

Modal.setAppElement("#root");
const Header = ({ tasks, setTasks, baseTasks, setBaseTasks }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskTags, setTaskTags] = useState([]);

    // Function for tag selection
    const tagSelection = (e, tagSelected) => {
        for (let tag = 0; tag < taskTags.length; tag++) {
            if (taskTags[tag] === tagSelected) {
                taskTags.splice(tag, 1);
                e.target.parentElement.className = "";
                return;
            }
        };
        setTaskTags([...taskTags, tagSelected]);
        e.target.parentElement.className = "selected";
    };

    // Reset add task modal
    const resetTask = () => {
        setTaskTitle("");
        setTaskDescription("");
        setTaskTags([]);
    };

    // Function to add new task
    const addTask = () => {
        let newTask = {
            id: uuid(),
            title: taskTitle,
            description: taskDescription,
            tags: taskTags,
            completed: false
        };

        document.querySelector("#hideCompleted").checked = false;
        setTasks([...baseTasks, newTask]);
        setBaseTasks([...baseTasks, newTask]);

        // Update local storage
        localStorage.setItem("ultimateTodoTasks", JSON.stringify([...baseTasks, newTask]));
    };

    return ( 
        <div className="header">
            <div className="title">
                todo
            </div>
            <span className="material-icons" onClick={() => {setModalOpen(true)}}>add</span>

            {/* Modal */}
            <Modal 
                isOpen={modalOpen} 
                onRequestClose={() => {setModalOpen(false); resetTask()}} 
                style={{overlay: {backgroundColor: "rgba(195, 194, 190, 0.5)"}}}
                className="modal"
            >
                <div className="buttons">
                    <div className="cancel" onClick={() => {setModalOpen(false); resetTask()}}>Cancel</div>
                    <div className="add"
                        onClick={() => {addTask(); setModalOpen(false); resetTask()}}
                    >
                        Add
                    </div>
                </div>
                <div className="title">
                    <label htmlFor="taskTitle">Title</label>
                    <input type="text" name="taskTitle" placeholder="Add a title..."
                        onKeyUp={(e) => {setTaskTitle(e.target.value)}}
                    />
                </div>
                <div className="description">
                    <label htmlFor="taskDescription">Description</label>
                    <textarea name="taskDescription" placeholder="Add a description..."
                        onKeyUp={(e) => {setTaskDescription(e.target.value)}}
                    >
                    </textarea>
                </div>
                <div className="tagsTitle">Tags</div>
                <div className="tags">
                    <div className="" onClick={(e) => {tagSelection(e, 1)}}>
                        <span className="material-icons" style={{color: "#D1E5F7"}}>circle</span>
                        <span className="tagTitle">Work</span>
                    </div>
                    <div className="" onClick={(e) => {tagSelection(e, 2)}}>
                        <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                        <span className="tagTitle">Study</span>
                    </div>
                    <div className="" onClick={(e) => {tagSelection(e, 3)}}>
                        <span className="material-icons" style={{color: "#D9F1D5"}}>circle</span>
                        <span className="tagTitle">Entertainment</span>
                    </div>
                    <div className="" onClick={(e) => {tagSelection(e, 4)}}>
                        <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                        <span className="tagTitle">Family</span>
                    </div>
                </div>
            </Modal>
        </div>
     );
}
 
export default Header;