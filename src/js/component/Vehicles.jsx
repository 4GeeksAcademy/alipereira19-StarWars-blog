import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const [page, setPage] = useState(1)
    const navigate = useNavigate();


    const nextVehicle = async () => {
        try {
            const nextPage = page + 1;
            setPage(nextPage)
            await actions.getVehicle(nextPage)
            console.log("esta es la pagina", page);

        } catch (error) {
            console.error(error);

        }
    };
    const previousVehicle = async () => {
        try {
            if (page > 1) {
                const prevPage = page - 1;
                setPage(prevPage);
                await actions.getVehicle(prevPage)
                console.log("esta es la pagina", page);
            }

        } catch (error) {
            console.error(error);

        }
    };

    const handlerGetVehicle = async () => {
        try {
            await actions.getVehicle(page);
        } catch (error) {
            console.error(error);

        }
    };

    const handlerMoreDetails = async (id) => {
        try {
            await actions.getMoreVehicles(id);
            navigate("/morevehicles")

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handlerGetVehicle();
        setPage(1)
    }, []);
    return (
        <div className="container my-4">
            <h1 className="" style={{ color: 'rgb(3, 93, 172)' }}>Vehicles</h1>
            <div className="d-flex overflow-auto flex-row" style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "auto",
                overflowY: "hidden",
                padding: "4px",
                border: "1px solid black",
                borderRadius: "8px",
            }}>
                {
                    store.vehicles && store.vehicles.map((vehicle) => {
                        return (
                            <div className="card" style={{
                                minWidth: "200px",
                                height: "400px",
                                backgroundColor: "rgb(34, 34, 34)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                borderRadius: "8px",
                                marginLeft: "3px",
                                marginRight: "3px",
                            }} key={vehicle.uid} >
                                <img src={`https://starwars-visualguide.com//assets/img/vehicles/${vehicle.uid}.jpg`} style={{ height: "400px" }} className="card-img-top" alt="Imagen no disponible en tu país/región" />
                                <div className="card-body ">
                                    <h5 className="card-title" style={{ color: "rgb(255, 25, 25)" }}>{vehicle.name}</h5>
                                    <br />
                                    <button style={{ background: "rgb(102, 102, 102)" }} className="btn btn-md text-dark" onClick={() => handlerMoreDetails(vehicle.uid)}>Learn More!</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div style={{ marginTop: '10px' }}>
                <button className="btn btn-lg border border-dark rounded text-light" onClick={previousVehicle}><GrCaretPrevious />
                </button>
                <button className="btn btn-lg border border-dark rounded text-light" onClick={nextVehicle}><GrCaretNext />
                </button>
            </div>
        </div>
    )
}

export default Vehicles;