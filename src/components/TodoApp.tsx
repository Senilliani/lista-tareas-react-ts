import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if (nuevaTarea.trim() === '') return   
    setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')
}

  const handleBorrarTarea = (index: number) => {
    setListaTareas(tareas => tareas.filter((_, i) => i !== index))
  }

  return (
    <div>
        <h1>Lista tareas</h1>
        <div className="flex">
        <input type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea" />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handleAddTask}>Agregar tarea</button></div>
        <div style={{ marginTop: '20px' }}> 
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}>
        </ListaTareas>
        </div>
        </div>
    </div>
  )
}