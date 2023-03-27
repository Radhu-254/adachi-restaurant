import React from "react";
import SpImg1 from "../assets/img/specials/pizza.jpeg"
import SpImg2 from "../assets/img/specials/drinks.jpeg"
import SpImg3 from "../assets/img/specials/ramen.jpeg"
import SpImg4 from "../assets/img/specials/dessert.jpg"
 
function Card({ image, name, title, subtitles }) {

  return (
                <div className="w-full md:w-1/2 lg:w-1/4 p-2 mt-52">
                  <h1 className="justify-center">50 % OFF</h1>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative">
                      <img src={image} alt={name} className="w-full h-auto" />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 py-1 px-2 text-white text-sm">
                        {name}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-black font-semibold text-lg mb-2">{title}</h3>
                      <div className="mb-2">
                        {subtitles.map((subtitle, index) => (
                          <p key={index} className="text-gray-500 text-sm mb-1">
                            {subtitle}
                          </p>
                        ))}
                      </div>
                      <div className="border-b border-gray-300 mb-4"></div>
                      <a 
                        href="/menu.pdf"
                        download={true}
                      >
                            <button className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg">
                              Learn More
                            </button>
                      </a>
                    </div>
                  </div>
                </div>
    
  );
}

function Cards() {
  const cards = [
    {
      id: 1,
      image: SpImg1,
      name: "Pizza ",
      title: "Sunday Special 🍕",
      subtitles: ["Salad Pizza", "Tokyo Pizza", "Japan Slice Pizza", "Ramen Crust Pizza", "Neapolitan Pizza"],
    },

    {
      id: 2,
      image: SpImg2,
      name: "Drinks",
      title: "Tuesday Special 🍸",
      subtitles: ["Mocktails", "Liqueurs", "Slushies", "Lemonade", "Cider"],
    },
    {
      id: 3,
      image: SpImg3,
      name: "Ramen",
      title: "Thursday Special 🍝",
      subtitles: ["Paitan Ramen", "Spicy Ramen", "Spicy Nibo", "Veg Ramen", "Miso Ramen"],
    },
    {
      id: 4,
      image: SpImg4,
      name: "Dessert",
      title: "Saturday Special 🍰",
      subtitles: ["Cobbler", "Cupcakes", "Chocolate Desserts", "Custurds and puddinds", "Caramel Desserts"],
    },
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-wrap -mx-3">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Cards;