import React from "react";
import "../App";

function FruitCounter ({image, fruit, setFruit, fruitName}) {

    return (
        <>
        <img src={image} alt="strawberry"/>
        <h2>{fruitName}</h2>
        <button onClick={ () => {setFruit(Math.max(fruit - 1, 0))}}>-</button>
        <p>{fruit}</p>
        <button onClick={ () => {setFruit(fruit + 1)}}>+</button>
        </>
    );
}

export default FruitCounter;
