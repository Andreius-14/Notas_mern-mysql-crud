import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'faztpassword',
    database: 'tasksdb'
})


/*
    🌱 Archivo Sensillo
    🌱 La conexion  mediante npm mysql2
    🌱 Listo para exportar
*/