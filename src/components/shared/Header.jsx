// iconos 
import { IoIosClose } from "react-icons/io";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header({ active, setActive }) {
  const Fecha = new Date().toISOString().split("T")[0];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/categorias")
      .then(res => {
        setCategories(res.data);
        setActive(res.data[0]?.Id_Categoria); // establece la primera categoría
      })
      .catch(err => console.error("❌ Error al cargar categorías:", err));
  }, []);


  
  return (
    <header>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-3''"> jeaker </h1>
          <p className="text-gray-500'"> {Fecha} </p>
        </div>

        <form>
          <div className="w-full relative">
            <FaSignOutAlt className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className="bg-[#e1e3e8be] -300 w-full py-2 pl-10 pr-4 rounded-lg text-black outline-none"
              type="text"
              placeholder="SEARCH"
            />
          </div>
        </form>
      </div>

      <div>
        <nav className="text-black flex items-center justify-between lg:justify-start lg:gap-8 border-b mb-6">
          {categories.map(({ Id_Categoria, Nombre }) => (
            <button
              key={Id_Categoria}
              onClick={() => setActive(Id_Categoria)}
              className={`relative py-2 pr-4 whitespace-nowrap
                ${active === Id_Categoria
                  ? "text-red-600 before:absolute before:left-0 before:-bottom-1 before:h-1 before:w-1/2 before:bg-red-600 before:rounded-full"
                  : "text-black hover:text-red-600"}`}
            >
              {Nombre}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
