import React from "react";
import styles from "./card.scss"

function Card() {
    return (
        <div>
            <li className="card">
            <img className="card__image" src="./image/sneakers/sneakers.jpg" alt="" />
            <p className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-price-wrapper">
                <p className="price-title">Цена:</p>
                <p className="price-value">12 999 руб.</p>
                <button className="button-add-cart">
                    <img className="card-add__image" src="./image/plus.svg" alt="" />
                </button>
            </div>
        </li>
        </div>
        

        
    )
};

export default Card;