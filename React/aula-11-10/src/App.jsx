import React from "react";
import "./styles.css";

function handleClick(response) {
  alert(response);
}

export default function App() {
  const cardData = [
    {
      id: 1,
      content: "#Matemática",
      topic: "Quanto é 2 + 2?",
      response: 4
    },
    {
      id: 2,
      content: "#Geografia",
      topic: "Qual a capital do Canadá?",
      response: "Toronto"
    },
    {
      id: 3,
      content: "#Ciências",
      topic: "Qual distância da Terra até a Lua?",
      response: "384.400 km"
    }
  ];

  return (
    <div className="card-list">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleClick(card.response)}
        >
          <h2>{card.topic}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
}
