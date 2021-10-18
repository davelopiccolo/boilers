import React, { useEffect, useState } from "react";
import axios from "axios";
import Boiler from "./Boiler";

export default function Boilers({ page }) {
    const [boilers, setBoilers] = useState([]);

    useEffect(() => {
        async function fetchBoilers() {
            const url = "http://localhost:9000/boilers";
            const response = await axios.get(url);

            response.status === 200 && setBoilers(response.data);
        }

        fetchBoilers();
    }, [page]);

    return (
        <div className="container">
            <div className="row">
                {boilers?.map((boiler) => (
                    <div className="col-4" key={boiler.id}>
                        <Boiler boiler={boiler} />
                    </div>
                ))}
            </div>
        </div>
    );
}
