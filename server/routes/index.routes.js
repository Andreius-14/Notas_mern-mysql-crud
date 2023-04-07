import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  const [rows] = await pool.query("SELECT 1 + 1 as result");
  console.log(rows[0]);
  res.json(rows[0]);
});

export default router;

// 🌱 Este codigo se Incrustara en Index.js
// Al ir a la ruta ping verificamos si la DB se logro conectar