import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";

export default function Body({ active }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/productos")
      .then(res => setProductos(res.data))
      .catch(err => console.log("❌ Error al cargar productos:", err));
  }, []);

  const visibleCards = productos.filter(p => p.Id_Categoria === active);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {visibleCards.map(({ Id_Producto, Nombre, Precio, Imagen }) => (
        <Card
          key={Id_Producto}
          img={Imagen} // 👈 si usas URL o nombre del archivo
          description={Nombre}
          price={`$${Precio}`}
        />
      ))}
    </div>
  );

  
}
