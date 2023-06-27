import React from "react";

function CardListJSX({altImage,name,email,srcImage}) {
  return (
    <div className="card-container">
      <img alt={altImage} src={srcImage} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default CardListJSX;
