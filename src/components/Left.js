const Left = ({ tasks, setTasks, baseTasks, setBaseTasks, selectedTag, setSelectedTag }) => {
    // Function to toggle the visibility completed tasks
    const toggleCompletedTasks = (e) => {
        let visibleTasks = [...baseTasks];

        if (e.target.checked) {
            visibleTasks = baseTasks.filter(task => task.completed !== true);
            setTasks(visibleTasks);
        } else {
            setTasks(baseTasks);
        }
    };

    // Function to select tags
    const tagSelection = (e, tag) => {
        let newSelection = [...selectedTag];
        if (selectedTag.includes(tag)) {
            e.target.parentElement.className = e.target.parentElement.className.replace(/\bselected\b/g, "");

            newSelection = newSelection.filter(select => select !== tag);
            setSelectedTag(newSelection);

            if (newSelection.length === 0) {
                document.querySelector("#hideCompleted").checked = false;
                setTasks(baseTasks);
            } else {
                updateTaskView(newSelection);
            }
        } else {
            e.target.parentElement.className = e.target.parentElement.className.replace(/\bsubtag\b/g, "subtag selected");

            setSelectedTag([...selectedTag, tag]);
            newSelection = [...newSelection, tag];
            updateTaskView(newSelection);
        };
    }

    // Function to update visible tasks based on tags
    const updateTaskView = (selection) => {
        console.log(selection.length)

        let updatedView = [];
        if (document.querySelector("#hideCompleted").checked === false) {
            baseTasks.forEach((task) => {
                for (let tag = 0; tag < selection.length; tag++) {
                    // console.log(selectedTag[tag])
                    if (task.tags.includes(selection[tag]) && !updatedView.includes(task)) {
                        updatedView.push(task);
                    }
                };
            })
        } else {
            tasks.forEach((task) => {
                for (let tag = 0; tag < selection.length; tag++) {
                    // console.log(selectedTag[tag])
                    if (task.tags.includes(selection[tag]) && !updatedView.includes(task)) {
                        updatedView.push(task);
                    }
                };
            })
        }

        setTasks(updatedView);
    }


    return ( 
        <div className="left">
            <div className="tags">
                <div className="work subtag" onClick={(e) => {tagSelection(e, 1)}}>
                    <span className="material-icons" style={{color: "#D1E5F7"}}>circle</span>
                    <div className="tag">Work</div>
                </div>
                <div className="study subtag" onClick={(e) => {tagSelection(e, 2)}}>
                    <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                    <div className="tag">Study</div>
                </div>
                <div className="entertainment subtag" onClick={(e) => {tagSelection(e, 3)}}>
                    <span className="material-icons" style={{color: "#D9F1D5"}}>circle</span>
                    <div className="tag">Entertainment</div>
                </div>
                <div className="family subtag" onClick={(e) => {tagSelection(e,4)}}>
                    <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                    <div className="tag">Family</div>
                </div>
            </div>
            <div className="hideCompleted">
                <input type="checkbox" name="completed" id="hideCompleted" defaultChecked={false} onChange={(e) => {toggleCompletedTasks(e)}}/>
                <label htmlFor="completed">Hide Done Tasks</label>
            </div>
            <img src="./main.png" alt="main" className="illustration"/>
        </div>
     );
}
 
export default Left;