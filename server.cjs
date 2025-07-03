// server.cjs

const express = require("express");
const mysql   = require("mysql");
const cors    = require("cors");
const multer  = require("multer");
const path    = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ————— Multer & Static Uploads —————
// Asegúrate de crear la carpeta `uploads/` en tu proyecto
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const ext       = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `prod-${timestamp}${ext}`);
  }
});
const upload = multer({ storage });

// Servir archivos estáticos desde /uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ————— Conexión a MySQL —————
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",         // vacía en XAMPP por defecto
  database: "store",    // nombre de tu base de datos
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error("❌ Falló la conexión a MySQL:", err.message);
  } else {
    console.log("✅ Conexión exitosa a MySQL");
  }
});

// ————— Rutas GET existentes —————
app.get("/api/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      console.error("❌ Error MySQL:", err.message);
      return res.status(500).send("Error al consultar productos");
    }
    res.json(results);
  });
});

app.get("/api/categorias", (req, res) => {
  db.query("SELECT Id_Categoria, Nombre FROM categorias", (err, results) => {
    if (err) {
      console.error("❌ Error al consultar categorías:", err.message);
      return res.status(500).send("Error al consultar categorías");
    }
    res.json(results);
  });
});

// ————— Nueva ruta POST para subir producto + imagen —————
app.post("/api/productos", upload.single("imagen"), (req, res) => {
  const { Nombre, Precio, Id_Categoria } = req.body;
  const imgPath = req.file ? `/uploads/${req.file.filename}` : null;

  const sql = `
    INSERT INTO productos (Nombre, Precio, Id_Categoria, Imagen)
    VALUES (?, ?, ?, ?)
  `;
  db.query(sql, [Nombre, Precio, Id_Categoria, imgPath], (err, result) => {
    if (err) {
      console.error("❌ Error al crear producto:", err.message);
      return res.status(500).send("Error al crear producto");
    }
    res.status(201).json({
      Id_Producto: result.insertId,
      Nombre,
      Precio,
      Id_Categoria,
      Imagen: imgPath
    });
  });
});

// ————— Inicio del servidor —————
app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});

// Nota: Asegúrate de que el puerto 3001 esté libre y no esté siendo usado por otro servicio.
// Si usas XAMPP, asegúrate de que MySQL esté corriendo y que la base de datos "store" exista con la tabla "productos" y sus campos correspondientes.


