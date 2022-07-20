import React from "react";
import "../assets/animations/Card.css";

const Cards = (props) => {
    return (
        <div className="rounded bg-white w-96 mx-auto mt-20" id="Card">
            <div>
                <img
                    src={props.imagen}
                    alt=""
                    srcSet=""
                    className="w-full rounded"
                />
            </div>
            <div className="bg-black text-white h-28">
                <h2 className="lg:text-4xl p-4 font-bold">
                    {props.id}. {props.name}
                </h2>
                <h1>{props.created}</h1>
            </div>
        </div>
    );
};

export default Cards;
