// 🌱 Inserta Tareas para visualizar

import { useEffect } from "react";
import TaskCard from "../components/TaskCard";

// ■ Tareas - Trae
import { useTasks } from "../context/TaskProvider";

function TasksPage() {

  // ■ Tareas - Extrae las Herramientas
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;

    // ■ Tareas - Inserta usando Componente
    return tasks.map((task) => <TaskCard task={task} key={task.id} />); //key={task.id} Es solo un Standar
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;

/*
  🌱 Muestra en interfaz el contenido de la DB
  🌱 Usa el compoente TaskCard.jsx
*/