import { pool } from "../db.js";

// 🟥🟥🟥🟥 [Obtencion - Mostrar] 🟥🟥🟥🟥

// All
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// One
export const getTask = async (req, res) => {
  try {

    //Codigo Bueno
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id,]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {

    //Error
    return res.status(500).json({ message: error.message });
  }
};

// 🟥🟥🟥🟥 [Crea - Actualiza - Borra] 🟥🟥🟥🟥

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query( "INSERT INTO tasks(title, description) VALUES (?, ?)", [title, description]);
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [ req.body, req.params.id,]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id,]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/*
  🌲 Este Archivo contiene las Funciones para modificar La Database
  🌲 El tryCath en cada punto ES una medida de seguridad, Evita que se caiga el Servidor
*/

