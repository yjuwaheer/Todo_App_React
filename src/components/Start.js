import { Link } from "react-router-dom"

const Start = () => {
    return ( 
        <div className="start">
            <div className="titleMain">
                <span style={{color: "#D1E5F7"}}>t</span>
                <span style={{color: "#FFCECE"}}>o</span>
                <span style={{color: "#D9F1D5"}}>d</span>
                <span style={{color: "#D2CEFF"}}>o</span>
            </div>
            <div className="about">
                The todo app you need to keep track of all the tasks you need to do. 
            </div>
            <Link className="startBut" to="/home">Get Started</Link>
            <img className="illustration" src="./stuff.png" alt=""/>
            <div className="dummy">
                <div className="head">
                    <div className="title">Use todo app</div>
                    <span className=" material-icons material-icons-outlined">more_horiz</span>
                </div>
                <div className="description">Start using the todo app</div>
                <div className="foot">
                    <div className="tags">
                        <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                        <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                    </div>
                    <div>
                        <input type="checkbox" name="done" defaultChecked />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Start;