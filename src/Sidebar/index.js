import React from "react";


export default function Sidebar() {

    return (
        <div className="side-bar">
            <div className="category">
                <h4 className="title"><b>CATEGORIE</b></h4>
                <h6 className="title">Riscaldamento</h6>

                <ul className="options">
                    <li>Casa e acqua</li>
                    <li>Casa</li>
                    <li>Acqua</li>
                </ul>
                <hr />
            </div>
            <div className="scegli-per">
                <h5 className="title"><b>SCEGLI PER</b></h5>
                <ul className="options">
                    <li>Disponibile
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>In promozione
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                </ul>
                <hr />
            </div>
            <div className="marche">
                <h5 className="title"><b>MARCHE</b></h5>
                <ul className="options">
                    <li>Ariston
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>Baxi
                        <label class="container" id="checkbox">
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>Ariston
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                </ul>
                <hr />
            </div>
            <div className="tipologia">
                <h5 className="title"><b>TIPOLOGIA</b></h5>
                <ul className="options">
                    <li>A condensazione
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>Camera Aperta
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>Camera Stagna
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                </ul>
                <hr />
            </div>
            <div className="alimentazione">
                <h5 className="title"><b>ALIMENTAZIONE</b></h5>
                <ul className="options">
                    <li>Elettrica
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>Metano
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                </ul>
                <hr />
            </div>
            <div className="potenza-nominale">
                <h5 className="title"><b>POTENZA NOMINALE (KW)</b></h5>
                <ul className="options">
                    <li>19.5
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>24
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>25
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>da 30 a 34
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                </ul>
                <hr />
            </div>
            <div classname="utilizzo">
                <h5 className="title"><b>UTILIZZO</b></h5>
                <ul className="options">
                    <li>Esterno
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>Interno
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                    <li>Interno/Esterno
                        <label class="container" id="checkbox">
                            <input type="checkbox" ></input>
                            <span class="checkmark"></span>
                        </label></li>
                </ul>
            </div>


        </div>

    )
}