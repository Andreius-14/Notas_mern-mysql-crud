import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;


// 🌱 Este codigo se Incrustara en Index.js
// 🌱 Este archivo llama Codigo de tasks.controllers.js

// 🌿 Una forma eficiente de no apilar en codigo
// 🌱 Todas las rutas que tendra a App