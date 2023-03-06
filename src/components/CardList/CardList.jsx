import React from "react";
import Card from "../Card/Card";
import styles from "./cardlist.scss"

function CardList() {
    return (
        <section className="section-card-list">
            <div className="head-section">
                <h2 className="title-section">Все кроссовки</h2>
                <div className="search-block">
                    <img className="search-icon" src="./image/search.svg" alt="Search" />
                    <input className="input-search" placeholder="Поиск..." type="text" />
                </div>
            </div>

            <ul className="card-list">
                <Card />
                <Card />
                <Card />
                <Card />          
            </ul>
        </section>
    )
}

export default CardList;