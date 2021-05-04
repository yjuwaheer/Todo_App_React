const Left = ({ tasks, setTasks, copyTasks, setCopyTasks }) => {
    // Function to toggle the visibility completed tasks
    const toggleCompletedTasks = (e) => {
        let visibleTasks = [...tasks];
        setCopyTasks(tasks);

        if (e.target.checked) {
            visibleTasks = tasks.filter(task => task.completed !== true);
            setTasks(visibleTasks);
        } else {
            setTasks(copyTasks);
        }
    };

    return ( 
        <div className="left">
            <div className="tags">
                <div className="work subtag">
                    <span className="material-icons" style={{color: "#D1E5F7"}}>circle</span>
                    <div className="tag">Work</div>
                </div>
                <div className="study subtag">
                    <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                    <div className="tag">Study</div>
                </div>
                <div className="entertainment subtag">
                    <span className="material-icons" style={{color: "#D9F1D5"}}>circle</span>
                    <div className="tag">Entertainment</div>
                </div>
                <div className="family subtag">
                    <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                    <div className="tag">Family</div>
                </div>
            </div>
            <div className="hideCompleted">
                <input type="checkbox" name="completed" defaultChecked={false} onChange={(e) => {toggleCompletedTasks(e)}}/>
                <label htmlFor="completed">Hide Done Tasks</label>
            </div>
            <img src="./main.png" alt="main" className="illustration"/>
        </div>
     );
}
 
export default Left;