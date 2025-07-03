// import React, { useState } from 'react';
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { Card } from "./Card";
import { cardsData } from "./Carsdata";
import { useState } from 'react';
import Header from "./Header";

// Se extrae las categorías únicas de tu base de datos
const categories = [...new Set(cardsData.map(c => c.category))];
function Body(props) {


    // const [activeCategory, setActiveCategory] = useState(categories[0]);

    const { active } = props;

    const visibleCards = cardsData.filter(card => card.category === active); 
    
      //Filtras según la categoría vigente
    //   const visibleCards = cardsData.filter(
    //     (card) => card.category === activeCategory
    //   );

    return (

        //  {/* contenido principal donde van las comidas , cada una tendra una CARD */}

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16">

             

            {/* Creacion de card  ,  object-cover :para no distorcionar la imagen   (shadow-2xl rounded-full : sobra para la imagen)*/}

            {/* utilizar map cuando leponga la base de datos  */}
            {/* 
            <Card img="comida.png" description="Spacy seafood  nofdes"
            price="$70.000 cop" category="430" />

             <Card img="dish.png" description="Spacy seafood  nofdes"
            price="$70.000 cop" category="430" />

            <Card img="comida.png" description="Spacy seafood  nofdes"
            price="$70.000 cop" category="430" />

            <Card img="dish.png" description="Spacy seafood  nofdes"
            price="$70.000 cop" category="430" />

            <Card img="comida.png" description="Spacy seafood  nofdes"
            price="$70.000 cop" category="430" /> */}

            {/* <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 "> */}




            {/* {listaDePlatos
              .filter((item) => item.category === categoriaActual)
              .map((item, index) => (
                <Card
                  key={index}
                  img={item.img}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                />
              ))} */}


            {visibleCards.map(({ id, img, description, price, category }) => (
                <Card
                    key={id}
                    img={img}
                    description={description}
                    price={price}
                    category={category}
                />
            ))}
            {/* </section> */}

















        </div>
    );
};

export default Body;
