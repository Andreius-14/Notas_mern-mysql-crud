import { useTasks } from "../context/TaskProvider"; // 🌟
import { useNavigate } from "react-router-dom";

// Funcion resive valor entre ellos id
function TaskCard({ task }) {

  // FUNCIONES - Usadas al usar Boton
  const { deleteTask, toggleTaskDone } = useTasks();  // 🌟
  const navigate = useNavigate();                     //react-router-dom

  const handleDone = async () => {                    // 🌟
    await toggleTaskDone(task.id);
  };

  // HTML
  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      
      {/* Informacion */}
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>

      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>

      {/* Botones */}
      <div className="flex gap-x-1">

        {/* [🔘 Eliminar] */}
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteTask(task.id)}               /*[🌟]*/
        >
          Delete
        </button>

        {/* [🔘 Editar] */}
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${task.id}`)} 
        >
          Edit
        </button>

        {/* [🔘 Tarea Hecha] */}
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handleDone(task.done)}            /*[🌟]*/
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

/*
  🌱 Solo un componente - Personalizado llama al backend API [TaskProvider]
  🌱 La carta ya tiene sus valores inscrustados
*/
