import React from "react";
import "./CardListStyle.css";
import CardListJSX from "./CardsListJSX.jsx/CardListJSX";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((mons, index) => {
        return (
          <CardListJSX
            key={index}
            classContainer={"card-container"}
            altImage={`monster ${mons.name}`}
            srcImage={`https://robohash.org/${mons.id}?set=set2&size=180x180`}
            name={mons.name}
            email={mons.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
