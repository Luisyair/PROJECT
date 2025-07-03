export const Card = ({ img, description, price, category }) => {
  return (
    <div className="bg-[#e1e3e8] p-8 rounded-xl flex flex-col items-center text-black text-center">
      {img && (
        <img
          src={`/${img}`}                              // ← cambia esto
          className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
          alt={description}
        />
      )}
      <p className="text-xl">{description}</p>
      <span className="text-[#d80032]">{price}</span>
      <p>{category}</p>
    </div>
  );
};
