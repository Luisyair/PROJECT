import React from "react";

import { FaHome, FaSignOutAlt } from "react-icons/fa";
// import { Body } from "./Body";
import { useState } from "react";
import Body from "./Body";

import { CreateCategory, CreatePedido, CreateProducto } from "./Create";


// iconos en la web 
// bg-[#ffffff];   blanco  */
// bg-[#e1e3e8];  gris claro slate-100) 
// bg-[#d80032] rojo intenso */
// bg-[#333333]; gris oscuro

// export const Sidebar = (props , setActiveView) => {


export const Sidebar = ({ ShowMenu, setActiveView, activeView }) => {

    // const {ShowMenu} = props;

    // const [ShowBody, setShowBody] = useState(false);

    //     const toggleBody= () => {
    //     setShowBody(!ShowBody);
    //   };




    const [ShowCreate, setShowCreate] = useState(true);

    const toggleCreate = () => {
        setShowCreate(!ShowCreate);
    };




    return (



        // {``} es necesario para poder app la logica y agregar variables 

        <div className={`bg-[#e1e3e8be] fixed left-0 top-0 w-28
        h-full text-black flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-colors
        ${ShowMenu ? "left-0" : "left-full"}`}
        >






            <div>

                <ul className="pl-4">

                    <li>
                        <h1 className="text-2xl text-blach-300 uppercase font-bold text-center my-5 text-bg-[#333333]"> logo</h1>
                    </li>
                    {/* 
                este es el primero, el que queda alumbranndo cuando se renderiza la app  */}

                    {/* <li className="bg-[#ffffff] p-4 rounded-tl-lg rounded-bl-xl  ">
                        <a onClick={() => setActiveView("dishes")} href="#" className="bg-[#d80032] p-4 block rounded-xl text-white">
                            <FaHome className="text-3xl" />
                        </a>
                    </li> */}

                    <li className={`p-4 rounded-tl-lg rounded-bl-xl group transition-colors
                      ${activeView === "dishes" ? "bg-[#ffffff]" : "hover:bg-[#ffffff]"}`}>

                        <a
                            onClick={() => setActiveView("dishes")}
                            href="#"
                            className={`p-4 flex justify-center rounded-xl transition-colors
                            ${activeView === "dishes"
                                    ? "bg-[#d80032] text-white"
                                    : "text-[#d80032] group-hover:bg-[#d80032] group-hover:text-white"}
                            `}
                        >
                            <FaHome className="text-3xl" />
                        </a>
                    </li>

                     <li className={`p-4 rounded-tl-lg rounded-bl-xl group transition-colors
                      ${activeView === "createProducto" ? "bg-[#ffffff]" : "hover:bg-[#ffffff]"}`}>

                        <a
                            onClick={() => setActiveView("createProducto")}
                            href="#"
                            className={`p-4 flex justify-center rounded-xl transition-colors
                            ${activeView === "createProducto"
                                    ? "bg-[#d80032] text-white"
                                    : "text-[#d80032] group-hover:bg-[#d80032] group-hover:text-white"}
                            `}
                        >
                            <FaHome className="text-3xl" />
                        </a>
                    </li>

                     <li className={`p-4 rounded-tl-lg rounded-bl-xl group transition-colors
                      ${activeView === "createCategory" ? "bg-[#ffffff]" : "hover:bg-[#ffffff]"}`}>

                        <a
                            onClick={() => setActiveView("createCategory")}
                            href="#"
                            className={`p-4 flex justify-center rounded-xl transition-colors
                            ${activeView === "createCategory"
                                    ? "bg-[#d80032] text-white"
                                    : "text-[#d80032] group-hover:bg-[#d80032] group-hover:text-white"}
                            `}
                        >
                            <FaHome className="text-3xl" />
                        </a>
                    </li>


                   



                </ul>

            </div>

            <div>

                {/* mandar el loug out mas abajo para que se diferencie  al contendorprincipal el div de arriba el primer se le añade (flex flex-col justify-between") */}

                <ul className="pl-4">
                    <li className="hover:bg-[#ffffff] p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#d80032] p-4 flex justify-center rounded-xl text-[#d80032] group-hover:text-white  transition-colors">
                            <FaSignOutAlt className="text-3xl" />
                        </a>
                    </li>
                </ul>
            </div>


            {/* <nav>
                <button onClick={() => setActiveView("createCategory")} className="p-2">
                    <FaSignOutAlt />
                </button>
                <button onClick={() => setActiveView("createProducto")} className="p-2">
                    <FaSignOutAlt />
                </button>
                <button onClick={() => setActiveView("dishes")} className="p-2">
                    <FaSignOutAlt />
                </button>
            </nav> */}





        </div>
    );
};

export default Sidebar