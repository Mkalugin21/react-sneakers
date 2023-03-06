import React from "react";
import styles from "./drawer.scss"

function Drawer() {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="drawer-heading" >Корзина</h2>

                <div className="cartItem">
                    <img className="cartItem-image" src="./image/sneakers/sneakers.jpg" alt="sneakers" />
                    <div>
                        <p className="card__name card__name--cart">Мужские Кроссовки Nike Air Max 270</p>
                        <p className="price-value">12 999 руб.</p>
                    </div>
                    <img src="./image/btn-remove.svg" alt="remove" />
                    
                </div>

                <div className="cartItem">
                    <img className="cartItem-image" src="./image/sneakers/sneakers.jpg" alt="sneakers" />
                    <div>
                        <p className="card__name card__name--cart">Мужские Кроссовки Nike Air Max 270</p>
                        <p className="price-value">12 999 руб.</p>
                    </div>
                    <img src="./image/btn-remove.svg" alt="remove" />
                    
                </div>
                
            </div>
        </div>
    )
};

export default Drawer;