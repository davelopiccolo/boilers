import React from "react";
import { useState, useEffect, useReducer } from "react";
import img from "../img/boiler.png"
import Ratings from "./Rating";

export default function Boiler({ boiler }) {
    const [checked, setChecked] = useState(0)

    const { id, alimentazione, brand, descrizione, disponibile, immagine, inSconto, note, potenzaNominale, prezzo, prezzoPreSconto, stelle, tipologia, utilizzo } = boiler;
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img} alt={descrizione} />
            <div className="card-body">
                <h5 className="card-title" id="brand"><strong>{brand}</strong></h5>
                <p className="card-text" id="title">{descrizione}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className="card-text" id="price"><strong>{prezzo}</strong></p>
                        </div>
                        <div className="col-6">
                            <p className="preSconto" id="preSconto">{prezzoPreSconto}</p>
                        </div>
                    </div>
                </div>

                <p className="card-text" id="notes"><strong>{note}</strong></p>
                <div className="container">
                    <div className="row">
                        <div class="col-4">
                            <Ratings rating={stelle} />
                        </div>
                        <div className="col-8">
                            <p id="compare" >CONFRONTA    </p>
                            <input className="compare" type="checkbox" />
                        </div>
                    </div>

                </div>
            </div >
        </div>


    )
}