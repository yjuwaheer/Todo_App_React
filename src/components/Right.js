const Right = () => {
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

    return ( 
        <div className="right">
            <div className="task">
                <div className="head">
                    <div className="title">Use todo app</div>
                    <span className=" material-icons material-icons-outlined" onClick={(e) => showButtons("button1", e)}>more_horiz</span>
                </div>
                <div className="description">Start using the todo app</div>
                <div className="foot">
                    <div className="tags">
                        <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                        <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                    </div>
                    <div>
                        <input type="checkbox" name="done" />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
                <div className="noButtons" id={"button" + 1}>
                    <div className="edit button">Edit</div>
                    <div className="divide"></div>
                    <div className="delete button">Delete</div>
                </div>
            </div>

            <div className="task">
                <div className="head">
                    <div className="title completed">Use todo app</div>
                    <span className=" material-icons material-icons-outlined" onClick={(e) => showButtons("button2", e)}>more_horiz</span>
                </div>
                <div className="description completed">Start using the todo app
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias cumque perspiciatis, natus obcaecati velit. Possimus illo illum esse vel eligendi, mollitia ab maxime architecto quidem unde iure ipsam atque culpa eos?</div>
                <div className="foot">
                    <div className="tags">
                        <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                        <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                    </div>
                    <div>
                        <input type="checkbox" name="done" checked="true" />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
                <div className="noButtons" id={"button" + 2}>
                    <div className="edit button">Edit</div>
                    <div className="divide"></div>
                    <div className="delete button">Delete</div>
                </div>
            </div>

            <div className="task">
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
                        <input type="checkbox" name="done" />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
            </div>

            <div className="task">
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
                        <input type="checkbox" name="done" />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
            </div>

            <div className="task">
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
                        <input type="checkbox" name="done" />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
            </div>

            <div className="task">
                <div className="head">
                    <div className="title completed">Use todo app</div>
                    <span className=" material-icons material-icons-outlined">more_horiz</span>
                </div>
                <div className="description completed">Start using the todo app
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias cumque perspiciatis, natus obcaecati velit. Possimus illo illum esse vel eligendi, mollitia ab maxime architecto quidem unde iure ipsam atque culpa eos?</div>
                <div className="foot">
                    <div className="tags">
                        <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                        <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                    </div>
                    <div>
                        <input type="checkbox" name="done" checked="true" />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
            </div>

            <div className="task">
                <div className="head">
                    <div className="title completed">Use todo app</div>
                    <span className=" material-icons material-icons-outlined">more_horiz</span>
                </div>
                <div className="description completed">Start using the todo app
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias cumque perspiciatis, natus obcaecati velit. Possimus illo illum esse vel eligendi, mollitia ab maxime architecto quidem unde iure ipsam atque culpa eos?</div>
                <div className="foot">
                    <div className="tags">
                        <span className="material-icons" style={{color: "#FFCECE"}}>circle</span>
                        <span className="material-icons" style={{color: "#D2CEFF"}}>circle</span>
                    </div>
                    <div>
                        <input type="checkbox" name="done" checked="true" />
                        <label htmlFor="done">Done</label>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Right;