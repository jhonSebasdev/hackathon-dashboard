const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Datos de ejemplo para los gráficos
app.get("/data", (req, res) => {
    res.json({
        barras: [
            { name: "Enero", ventas: 400 },
            { name: "Febrero", ventas: 600 },
            { name: "Marzo", ventas: 300 },
        ],
        pastel: [
            { name: "Producto A", value: 30 },
            { name: "Producto B", value: 50 },
            { name: "Producto C", value: 20 },
        ],
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
