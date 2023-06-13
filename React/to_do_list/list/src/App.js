import './App.css';
import {useState} from 'react'
import AddToDoList from './Components/AddToList';
import Task from './Components/List';


function App() {
  const [toDoList, setToDoList] = useState([
    {
      task: "Grocery shopping",
      complete: false 
    },
    {
      task: "Take Gucci to the groomer",
      complete: true 
    }
  ])

  const addNewTask = (newTask) => {
    setToDoList((prevToDoList) => [...prevToDoList, newTask]);
  }

  const handleOnChange = (e, id) => {
    const newToDoList = [...toDoList];
    newToDoList[id].complete = !newToDoList[id].complete;
    setToDoList(newToDoList);

  }
  const handleOnClick = (e, id) => {
    let filteredToDoList = toDoList.filter((task, index) => index !== id);
    setToDoList(filteredToDoList);
  }

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <AddToDoList addNewTask={addNewTask} />
      <h2>List of tasks:</h2>
      {
        toDoList.map((item, index) =>
          <Task task={item} handleOnChange={handleOnChange} key={index} id={index} handleOnClick={handleOnClick} />
        )
      }
    </div>
  );
}
export default App;
