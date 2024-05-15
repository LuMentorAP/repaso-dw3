import { useState } from "react";
import BodyComponent from "./BodyComponent"
import Navbar from "./Navbar"


function App() {



  const [tasks, setTasks] = useState([]);
  const[newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    } else {
      alert('Escribir algo porfi')
    }
  };
  

  return (
    <>
      <div class="d-flex">

        <input class="form-control me-sm-2" type="text" value={newTask} placeholder="Agregar Tarea"  onChange={handleInputChange} />
        <button class="btn btn-secondary my-2 my-sm-0" onClick={handleAddTask} >Agregar Tarea</button>
      </div>
      <div class="d-flex">
        <ul class="list-group">
          { tasks.map((task, index) => (

            <li class="list-group-item d-flex justify-content-between align-items-center" key={index}>

              {task}
              <button type="button" class="btn btn-danger" >Eliminar</button>
            </li>
          
          ))}

        </ul>
      </div>
      
    </>

  )
}

export default App
