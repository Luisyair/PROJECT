import React from "react";
// iconos 
import { IoIosClose } from "react-icons/io";
import { FaHome, FaSignOutAlt } from "react-icons/fa";


// iconos en la web 
// bg-[#ffffff];   blanco  */
// bg-[#e1e3e8];  gris claro slate-100) 
// bg-[#d80032] rojo intenso */
// bg-[#333333]; gris oscuro

export const Car = (props) => {


  const { ShowOrder,setShowOrder} = props


  return (

        /* DERECHA de la pagina ,este tambien lo utilizaremos para enconderlo porque lo queremos para movil renposive por eso usamos el showOrder    ({`ShowOrder ? "right-0" : "-right-full"`}) */

      
    <div className={`lg:col-span-2 fixed top-0
            w-full lg:w-[370px] lg:right-0 h-full bg-[#e1e3e8] transition-all z-50
            ${ShowOrder ? "right-0" : "-right-full"}`}>
    
              {/* ordenes  (overflow-y-scroll pb-96 : para poder desplazar y que el contenidos baje o suba y no quede estatico)*/}
              <div className="relative pt-16 lg:pt-3 text-black p-8 h-full">
                <IoIosClose 
                onClick={() => setShowOrder(false)} 
                className="lg:hidden absolute left-4 top-4 p-2 box-content
                text-white bg-black rounded-full text-xl" />
    
                <h1 className="text-2xl my-4"> oreden 123212</h1>
    
                {/* flex-wrap : para que no se ocumelen cuando se añadan mas pestañas  */}
    
                <div className="flex items-center gap-4 flex-wrap mb-8">
                  <button className="bg-[#d80032] text-white py-2 px-4 rounded-xl"> Dine in </button>
    
                  <button className="text-[#d80032] py-2 px-4 rounded-xl
                  border border-[#d80032]"> Dine in </button>
    
                  <button className="text-[#d80032] py-2 px-4 rounded-xl
                  border border-[#d80032]"> Dine in </button>
                </div>
    
                {/* productos selecionados  ("col-span-4 : ocupa los 4 espacios )  (grid grid-cols-6 : creacion de columnas)  CARD*/}
    
                <div>
                  <div className="grid grid-cols-6 mb-4 p-4 bg-[#e1e3e8] border border-black">
                    <h5 className="col-span-4"> Item</h5>
                    <h5> Qty</h5>
                    <h5> Price</h5>
                  </div>
    
                  {/* Productos . contenido  de los productos seleccionados  (object-cover : arregla las medias ) bg-red-500 */}
    
                  <div className=" h-[400px] md:h-[600px] lg:h-[450px] overflow-y-scroll scroll-hidden">
    
                    {/* 1 productos  */}
                    <div className="bg-[#ffffff] p-4 rounded-xl mb-4  ">
    
                      {/* descripcion del producto */}
    
                      {/* 1 productos  */}
                      <div className="grid grid-cols-6 mb-4 items-center">
    
                        <div className="col-span-4 flex items-center gap-1">
                          <img src="comida.png" alt="" className="w-16 h-16 object-cover" />
                          <div>
                            <h5 className="text-sm"> Spacei</h5>
                            <p className="text-xs text-[#d80032]"> $23.000</p>
                          </div>
                        </div>
    
                        <div>
                          <span>2</span>
                        </div>
    
                        <div>
                          <span> 400</span>
                        </div>
    
                      </div>
    
    
    
    
                      {/* notas .. input y borrar */}
    
                      <div className="grid grid-cols-6 items-center gap-2">
    
                        <form className="col-span-5">
    
                          <input type="text" className="bg-[#e1e3e8] py-2 px-4 rounded-lg
                          outline-none"
                            placeholder="holi" />
    
    
                        </form>
    
                        <div>
                          <button className="border border-red-700 bg-[#d80032] p-2 rounded-lg">
                            <FaSignOutAlt className="text-white" />
                          </button>
                        </div>
    
    
    
                      </div>
    
                    </div>
    
                    {/* 2 productos  */}
                    <div className="bg-[#ffffff] p-4 rounded-xl mb-4  ">
    
                      {/* descripcion del producto */}
    
                      {/* 1 productos  */}
                      <div className="grid grid-cols-6 mb-4 items-center">
    
                        <div className="col-span-4 flex items-center gap-1">
                          <img src="comida.png" alt="" className="w-16 h-16 object-cover" />
                          <div>
                            <h5 className="text-sm"> Spacei</h5>
                            <p className="text-xs text-[#d80032]"> $23.000</p>
                          </div>
                        </div>
    
                        <div>
                          <span>2</span>
                        </div>
    
                        <div>
                          <span> 400</span>
                        </div>
    
                      </div>
    
    
    
    
                      {/* notas .. input y borrar */}
    
                      <div className="grid grid-cols-6 items-center gap-2">
    
                        <form className="col-span-5">
    
                          <input type="text" className="bg-[#e1e3e8] py-2 px-4 rounded-lg
                          outline-none"
                            placeholder="holi" />
    
    
                        </form>
    
                        <div>
                          <button className="border border-red-700 bg-[#d80032] p-2 rounded-lg">
                            <FaSignOutAlt className="text-white" />
                          </button>
                        </div>
    
    
    
                      </div>
    
                    </div>
    
                    {/* 3 productos  */}
                   <div className="bg-[#ffffff] p-4 rounded-xl mb-4  ">
    
                      {/* descripcion del producto */}
    
                      {/* 1 productos  */}
                      <div className="grid grid-cols-6 mb-4 items-center">
    
                        <div className="col-span-4 flex items-center gap-1">
                          <img src="comida.png" alt="" className="w-16 h-16 object-cover" />
                          <div>
                            <h5 className="text-sm"> Spacei</h5>
                            <p className="text-xs text-[#d80032]"> $23.000</p>
                          </div>
                        </div>
    
                        <div>
                          <span>2</span>
                        </div>
    
                        <div>
                          <span> 400</span>
                        </div>
    
                      </div>
    
    
    
    
                      {/* notas .. input y borrar */}
    
                      <div className="grid grid-cols-6 items-center gap-2">
    
                        <form className="col-span-5">
    
                          <input type="text" className="bg-[#e1e3e8] py-2 px-4 rounded-lg
                          outline-none"
                            placeholder="holi" />
    
    
                        </form>
    
                        <div>
                          <button className="border border-red-700 bg-[#d80032] p-2 rounded-lg">
                            <FaSignOutAlt className="text-white" />
                          </button>
                        </div>
    
    
    
                      </div>
    
                    </div>
    
                     {/* 4 productos  */}
                   <div className="bg-[#ffffff] p-4 rounded-xl mb-4  ">
    
                      {/* descripcion del producto */}
    
                      {/* 1 productos  */}
                      <div className="grid grid-cols-6 mb-4 items-center">
    
                        <div className="col-span-4 flex items-center gap-1">
                          <img src="comida.png" alt="" className="w-16 h-16 object-cover" />
                          <div>
                            <h5 className="text-sm"> Spacei</h5>
                            <p className="text-xs text-[#d80032]"> $23.000</p>
                          </div>
                        </div>
    
                        <div>
                          <span>2</span>
                        </div>
    
                        <div>
                          <span> 400</span>
                        </div>
    
                      </div>
    
    
    
    
                      {/* notas .. input y borrar */}
    
                      <div className="grid grid-cols-6 items-center gap-2">
    
                        <form className="col-span-5">
    
                          <input type="text" className="bg-[#e1e3e8] py-2 px-4 rounded-lg
                          outline-none"
                            placeholder="holi" />
    
    
                        </form>
    
                        <div>
                          <button className="border border-red-700 bg-[#d80032] p-2 rounded-lg">
                            <FaSignOutAlt className="text-white" />
                          </button>
                        </div>
    
    
    
                      </div>
    
                    </div>
    
                    
    
    
    
                  </div>
    
    
    
    
    
    
    
     {/* submit - envio al pago  */}
                <div className="bg-[#ffffff]  absolute w-full bottom-0 left-0 p-4">
    
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500"> Discoount : </span>
                    <span> 0 </span>
                  </div>
    
    
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500">  subtotal :</span>
                    <span> 201.203 </span>
                  </div>
    
    
    
                  {/* boton para continuar el pago */}
                  <div>
                    <button className="bg-[#d80032] border-2 border-white text-white w-full py-2 px-4 rounded-lg hover:bg-black">
                      Continua el pago
                    </button>
                  </div>
                </div>
    
    
                </div>
    
               
    
    
    
    
              </div>
    
    
    
    
    
            </div>
  );
};