import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }
    
    return (<div id="wd-lab4">
        <h2>Lab 4</h2>
        <h3>Maintaining State in React Applications</h3>
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        </div>);
}