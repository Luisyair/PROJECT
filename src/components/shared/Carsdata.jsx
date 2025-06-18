// lista de productos 

export const cardsData = [
  {
    id: 1,
    img: "comida.png",
    description: "Spaghetti con albóndigas",
    price: "$25 000",
    category: "Italiano",
  },
  {
    id: 11,
    img: "comida.png",
    description: "Spaghetti con albóndigas",
    price: "$25 000",
    category: "Italiano",
  },
  {
    id: 22,
    img: "comida.png",
    description: "Arroz chaufa especial",
    price: "$22 000",
    category: "Peruano–Chino",
  },
  {
    id: 23,
    img: "comida.png",
    description: "Arroz chaufa especial",
    price: "$22 000",
    category: "Peruano–Chino",
  },
  {
    id: 31,
    img: "dish.png",
    description: "Tacos al pastor",
    price: "$18 000",
    category: "Mexicano",
  },
  {
    id: 323,
    img: "dish.png",
    description: "Tacos al pastor",
    price: "$18 000",
    category: "Mexicano",
  }, {
    id: 345,
    img: "dish.png",
    description: "Tacos al pastor",
    price: "$18 000",
    category: "Mexicano",
  }, {
    id: 343,
    img: "dish.png",
    description: "Tacos al pastor",
    price: "$18 000",
    category: "Mexicano",
  },
  // …agrega los que quieras
];

const DetalleCompra = [
  {
    id: 1,
    id_producto: 1,
    cantidad: 3,
  },
].map(detalle => ({
  ...detalle,
  total: detalle.cantidad * parsePrecio(cardsData.find(p => p.id === detalle.id_producto).price),
  nombre_producto: cardsData.find(p => p.id === detalle.id_producto).description,
}));


const Pedido = [
  {
    id: 1,
    detalles: DetalleCompra,
    fecha: "2025-06-18", // ejemplo extra
    cliente: "Luis",     // opcional
  },
];




