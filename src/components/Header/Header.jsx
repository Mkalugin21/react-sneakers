import React from "react"
import styles from "./header.scss"

function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <img className="logo-image" src="./image/logo.png" alt="Sneakers logo" />
                <div className="logo-text">
                    <span className="logo-name">React sneakers</span>
                    <span className="logo-description">Магазин лучших кроссовок</span>
                </div>
            </div>
            <div className="header-right">
                <div className="header-right__cart">
                    <img className="cart-image" src="./image/cart.svg" alt="" />
                    <span className="cart-price">1200 руб.</span>
                </div>
                <div className="header-right__favorites">
                    <img className="favorites-image" src="./image/favorites.svg" alt="" />
                </div>
                <div className="header-right__user">
                    <img className="user-image" src="./image/user.svg" alt="" />

                </div>
            </div>
        </header>
    )
}

export default Header 