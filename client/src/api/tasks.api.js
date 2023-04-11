// [Interactura con el Server]
import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);
  

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  });

  // 🌿 Tiene sentido Verifica -> Server/routes/tasks.routes.js -- /controllers/tasks.controllers
  // 🌿 El 4000 es del Server