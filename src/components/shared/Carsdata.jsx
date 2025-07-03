// -------- helpers --------
// convierte  el texto a numero,para poder hacer el porcentaje 
const parsePrecio = (txt) =>
  Number(txt.replace(/\D/g, "")); // "$25 000" -> 25000

// -------- data --------
export const cardsData = [
  { id: 1,   img: "comida.png", description: "Spaghetti con albóndigas", price: "$25 000", category: "Italiano" },
  { id: 11,  img: "comida.png", description: "Spaghetti con albóndigas", price: "$25 000", category: "Italiano" },

  { id: 22,  img: "comida.png", description: "Arroz chaufa especial",   price: "$22 000", category: "Peruano–Chino" },
  { id: 23,  img: "comida.png", description: "Arroz chaufa especial",   price: "$22 000", category: "Peruano–Chino" },

  { id: 31,  img: "dish.png",   description: "Tacos al pastor",         price: "$18 000", category: "Mexicano" },
  { id: 323, img: "dish.png",   description: "Tacos al pastor",         price: "$18 000", category: "Mexicano" },
  { id: 345, img: "dish.png",   description: "Tacos al pastor",         price: "$18 000", category: "Mexicano" },
  { id: 343, img: "dish.png",   description: "Tacos al pastor",         price: "$18 000", category: "Mexicano" },
];

// -------- detalles de compra --------
const DetalleCompra = [
  { id: 1, 
    id_producto: 1, 
    cantidad: 3 },
    ].map((d) => {
  const prod = cardsData.find((p) => p.id === d.id_producto);
  return {
    ...d,
    nombre_producto: prod.description,
    total: d.cantidad * parsePrecio(prod.price),
  };
});

// -------- pedido --------
const Pedido = [
  {
    id: 1,
    cliente: "Luis",
    fecha: new Date().toISOString().split("T")[0], // "2025-06-18  pasar la fecha actual con este formato"
    detalles: DetalleCompra,
  },
];

export { DetalleCompra, Pedido };

