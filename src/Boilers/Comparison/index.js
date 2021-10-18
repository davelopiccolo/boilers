import { useState, useReducer } from "react";
import Boiler from "../Boiler";
import Banner from "../../Banner/Banner";


export default function Comparison() {
    if (Boiler.input.compare.checked)
        return (
            <Banner />

        )
}