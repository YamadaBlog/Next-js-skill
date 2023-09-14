import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "pikachu",
  database: "my_database",
  connectionLimit: 10, // Adjust this value based on your needs
});

export default pool;
