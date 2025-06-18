


export const Card = (props) => {


    const {img,description,price,category} = props;
    return(
        <div className="bg-[#e1e3e8] p-8 rounded-xl flex flex-col items-center text-black text-center">
              <img src={img}
              className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" alt="plato de comida"/>
              <p className="text-xl"> {description} </p>
              <span className="text-[#d80032]"> {price}</span>
              <p>{category}</p>
            </div>
    );
};