// Hooks 
import { useState } from "react";

// iconos 
import { IoIosClose } from "react-icons/io";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

// Componentes 
import { cardsData } from "./components/shared/Carsdata";
import Sidebar from "./components/shared/Sidebar";
import { Car } from "./components/shared/Car";
import { Card } from "./components/shared/Card";


import Header from "./components/shared/Header";
import { CreateCategory, CreatePedido, CreateProducto } from "./components/shared/Create";
import Body from "./components/shared/Body";

// Se extrae las categorías únicas de tu base de datos
const categories = [...new Set(cardsData.map(c => c.category))];

const Fecha = new Date().toISOString().split("T")[0];
function App() {

  // Activamos el estado y lo levantado – control central :siempre que se iniciela app inica con el
  // de la posicion (N)

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  //Filtras según la categoría vigente
  const visibleCards = cardsData.filter(
    (card) => card.category === activeCategory
  );


  //Filtras según el vigente
  // const visibleCards = cardsData.filter(
  //   (card) => card.category === activeCategory
  // );

  // const categoriaActual = "Bebidas"; // podría venir de un estado también

  // creamoslos estados 

  const [ShowMenu, setShowMenu] = useState(false);
  const [ShowOrder, setShowOrder] = useState(false);


  const [ShowCard, setShowCard] = useState("category");
  // / Filtramos los platillos que pertenezcan a la categoría seleccionada


  // export default function DishGallery ({active}) {
  //   const visible = cardsData.filter(plato => plato.category == ShowCard);
  // }


  // dishes.filter(dish => dish.category === active);

  // creacion de funcion ;mostrar menu 

  const toggleMmenu = () => {
    setShowMenu(!ShowMenu);
    setShowOrder(false)
  }
  const toggleOrder = () => {
    setShowOrder(!ShowOrder)
    setShowMenu(true);

  }


  //   const DishGallery = (active) => {
  //   if (!active || active === "Italiano") return cardsData;

  //   return visible;
  // };
  // const visible = cardsData.filter((plato) => plato.category === active)



  // function DishGallery() {
  //   const [active, setActive] = useState("Italiano");     // categoría seleccionada
  //   const visible = toggleMmenu(active); 




  // ot 

  const [activeView, setActiveView] = useState("dishes");



  return (

    <div className="bg-[#ffffff] w-full min-h-screen">
      {/* IZQUIERDA de la pagina , aqui le paso el componente para mi sidebar  */}
      {/* <Sidebar ShowMenu={!ShowMenu} /> */}

      <Sidebar ShowMenu={!ShowMenu} setActiveView={setActiveView} 
      activeView={activeView}/>


      {/* derecha  */}
      <Car ShowOrder={ShowOrder} setShowOrder={setShowOrder} />


      {/* MENU para los celulares y tables es responsibe para que se habra y cierre  */}
      <nav className="bg-[#e1e3e8] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-[#d80032] p-4 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">

        {/* cuenta del usuario  */}
        <button className="p-2">
          <FaSignOutAlt />
        </button>

        {/* aagregar un nuevo menu   */}
        <button className="p-2">
          <FaSignOutAlt />
        </button>

        {/* desplazar ordenes  */}
        <button onClick={toggleOrder} className="p-2">
          <FaSignOutAlt />
        </button>


        {/* desplazar el mennu  */}
        <button onClick={toggleMmenu} className="text-black p-2">
          {ShowMenu ? <FaSignOutAlt /> : <IoIosClose />}

        </button>



      </nav>



      {/* De aqui para abajo esta la parte del centro y derecha de la pagina (p- 4 = es le pading el espacio que hay desde el borde hacia adentro) */}

      <main className="lg:pl-32  lg:pr-[370px]  pb-20">

        {/* CENTRO de la pagina la mitad en donde esta los alimentos (md: 768px	Tablets y pantallas medianas )*/}



        {/* cambio de pagina para crear productos  */}

        <div className="lg:col-span-6 md:p-8 p-4">
          {activeView === "dishes" && (
            <>
              <Header
                categories={categories}
                active={activeCategory}
                setActive={setActiveCategory}
              />
              <div className="flex items-center justify-between mb-16 ">
                <h2 className="text-xl text-black "> show Dishes</h2>
                <button className="flex items-center gap-4 text-black bg-[#e1e3e8be] py-2 px-4 rounded-lg">
                  <FaHome /> Dine IN
                </button>
              </div>
              <Body active={activeCategory} />
            </>
          )}

          {activeView === "createCategory" && <CreateCategory />}
          {activeView === "createProducto" && <CreateProducto />}
        </div>











      </main>




    </div>

  )



}

export default App;
