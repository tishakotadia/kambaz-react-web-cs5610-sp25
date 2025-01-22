export default function Modules() { 
    return ( 
    <div> 
        <button type="button"
                onClick={() => alert("All collapsed")}
                id="wd-all-collapse">
                Collapse All
        </button>
        <button type="button"
                onClick={() => alert("View the progress")}
                id="wd-all-progress">
                View Progress
        </button>
        <label htmlFor="wd-select-one-publish"> </label><br/>
        <select id="wd-select-one-publish">
            <option selected value="Publish All">Publish All</option>
        </select> 
        <button type="button"
                onClick={() => alert("New Module")}
                id="wd-all-module">
                + Module
        </button>

    <ul id="wd-modules"> 
        <li className="wd-module"> 
            <div className="wd-title">Week 1</div> 
            <ul className="wd-lessons"> 
                <li className="wd-lesson"> <span className="wd-title">LEARNING OBJECTIVES</span> 
            <ul className="wd-content"> 
                <li className="wd-content-item">Introduction to the course</li> 
                <li className="wd-content-item">Learn what is Web Development</li> 
            </ul> 
            </li> 
            </ul> 
        </li> 
        <li className="wd-module"> 
            <div className="wd-title">Week 2</div> 
        </li> 
        <li className="wd-module"> 
            <div className="wd-title">Week 3</div> 
        </li> 
    </ul> 
    </div> 
);}