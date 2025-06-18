// iconos 
import { IoIosClose } from "react-icons/io";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { cardsData } from "./Carsdata";
import { useState } from "react";

import { FaSearch } from "react-icons/fa";


export default function Header({ categories , active, setActive }) {


    return (
        //   {/* header - cabeza dela pagina  */}
        <header>

            {/* texto de inicial - este div es para ponerlos en columna flex,  gap: espacio entre si - (titlle and sucrh,) 
        //             mb: tamaño de la margen botton*/}

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                {/* texto de inicial - principal  */}
                <div >
                    <h1 className="text-2xl text-gray-3''"> jeaker </h1>
                    <p className="text-gray-500'"> 7 -julio - 2.000</p>
                </div>


                {/* buscador  */}
                <form>
                    <div className="w-full relative">

                        <FaSignOutAlt className="absolute left-3 top-1/2 -translate-y-1/2" />
                        <input className="bg-[#e1e3e8be] -300 w-full py-2 pl-10 pr-4 rounded-lg text-black outline-none" type="text"
                            placeholder="SEARCH" />

                    </div>

                </form>

            </div>


            {/* <nav className="text-black flex items-center justify-between lg:justify-start lg:gap-8 border-b mb-6">

                    <button className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#d80032] before:left-0 before:rounded-full before:-bottom-[1px] text-[#d80032]">Platos fuertes</button> 


                    <button  className="py-2 pr-4"> Entradas o pasabocas</button >
                    <button  className="py-2 pr-4">bebidas</button >
                    <button  className="py-2 pr-4"> Postres y dulces</button >

                </nav> */}


                
            {/*  Navegador  - titulo tipos de comida- tabs */}

            
            <div>


                <nav className="text-black flex items-center justify-between lg:justify-start lg:gap-8 border-b mb-6">
                    {categories.map((id) => (
                        <button
                            key={id}
                            onClick={() => setActive(id)}
                            className={`relative py-2 pr-4 whitespace-nowrap
                            ${active === id
                                    ? "text-red-600 before:absolute before:left-0 before:-bottom-1 before:h-1 before:w-1/2 before:bg-red-600 before:rounded-full"
                                    : "text-black hover:text-red-600"}`}

                        >
                            {id}
                        </button>

                    ))}



                </nav>
            </div>

        </header>

    );
};