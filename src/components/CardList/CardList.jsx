import React from "react";
import Card from "../Card/Card";
import styles from "./cardlist.scss"

function CardList() {
    return (
        <section className="section-card-list">
            <h2 className="title-section">Все кроссовки</h2>
            <ul className="card-list">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
        </section>
    )
}

export default CardList;