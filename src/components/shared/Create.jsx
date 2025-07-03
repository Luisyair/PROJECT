import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";


export const CreateCategory = (props) => {


      const { ShowCreate, setShowCreate } = props

    return (
        //    {/* crear categorias  */}
        <div className="bg-[#e1e3e8] p-8 rounded-xl text-black text-center mb-5">

            <div className="text-center mb-14 ">
                <h1> Categorias </h1>
            </div>

            <div className="grid grid-cols-5 gap-2 items-center">

                <form className="col-span-5"></form>

                <form className="col-span-2 flex">

                    <div className="text-left">
                        <h1 className="-translate-y-2">CODIGO</h1>
                        <input type="text" className="bg-white py-2 px-4 rounded-lg
                                          outline-none"
                            placeholder="holi" />

                    </div>

                </form>

                <form className="col-span-2 flex">

                    <div className="text-left">
                        <h1 className="-translate-y-2">NOMBRE</h1>
                        <input type="text" className="bg-white py-2 px-4 rounded-lg
                                          outline-none"
                            placeholder="holi" />

                    </div>

                </form>

                {/* boton de envio  */}
                <div className="p2">
                    <h2 className="-translate-y-2">GUARDAR</h2>
                    <button className="border border-red-700 bg-[#d80032] p-2 rounded-lg">
                        <FaSignOutAlt className="text-white" />
                    </button>
                </div>

            </div>


        </div>
    );
};


export const CreateProducto= () => {
    return (
        //    {/* crear categorias  */}
        <div className="bg-[#e1e3e8] p-8 rounded-xl text-black text-center mb-5">

            <div className="text-center mb-14 ">
                <h1> Categorias </h1>
            </div>

            <div className="grid grid-cols-5 gap-2 items-center">

                <form className="col-span-5"></form>

                <form className="col-span-2 flex">

                    <div className="text-left">
                        <h1 className="-translate-y-2">CODIGO</h1>
                        <input type="text" className="bg-white py-2 px-4 rounded-lg
                                          outline-none"
                            placeholder="holi" />

                    </div>

                </form>

                <form className="col-span-2 flex">

                    <div className="text-left">
                        <h1 className="-translate-y-2">NOMBRE</h1>
                        <input id="ho" type="text" className="bg-white py-2 px-4 rounded-lg
                                          outline-none"
                            placeholder="holi" />

                    </div>

                </form>

                {/* boton de envio  */}
                <div className="p2">
                    <h2 className="-translate-y-2">GUARDAR</h2>
                    <button className="border border-red-700 bg-[#d80032] p-2 rounded-lg">
                        <FaSignOutAlt className="text-white" />
                    </button>
                </div>

            </div>


        </div>
    );
};

export const CreatePedido= () => {
    return (
        //    {/* crear categorias  */}
        <div className="bg-[#e1e3e8] p-8 rounded-xl text-black text-center mb-5">

            <div className="text-center mb-14 ">
                <h1> Categorias </h1>
            </div>

            <div className="grid grid-cols-5 gap-2 items-center">

                <form className="col-span-5"></form>

                <form className="col-span-2 flex">

                    <div className="text-left">
                        <h1 className="-translate-y-2">CODIGO</h1>
                        <input type="text" className="bg-white py-2 px-4 rounded-lg
                                          outline-none"
                            placeholder="holi" />

                    </div>

                </form>

                <form className="col-span-2 flex">

                    <div className="text-left">
                        <h1 className="-translate-y-2">NOMBRE</h1>
                        <input type="text" className="bg-white py-2 px-4 rounded-lg
                                          outline-none"
                            placeholder="holi" />

                    </div>

                </form>

                {/* boton de envio  */}
                <div className="p2">
                    <h2 className="-translate-y-2">GUARDAR</h2>
                    <button className="border border-red-700 bg-[#d80032] p-2 rounded-lg">
                        <FaSignOutAlt className="text-white" />
                    </button>
                </div>

            </div>


        </div>
    );
};



