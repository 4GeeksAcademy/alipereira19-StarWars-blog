import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const LearnMoreVehicle = () => {
    const { store, actions } = useContext(Context);
    const getInfoVehicle = async () => {
        try {
            await actions.getMoreVehicles()
        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        getInfoVehicle();
    }, []);

    return (
        <div className="container my-4">
            <h1 className="text-center " style={{ color: "rgb(255, 25, 25)" }}>{store.vehicleProperties.properties.name || "Details"}</h1>
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com//assets/img/vehicles/${store.vehicleProperties.uid}.jpg`}
                    className="card-img-top"
                    alt={store.vehicleProperties.properties.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Type: Vehicle</h5>
                    <p><strong>Model: </strong>{store.vehicleProperties.properties.model || 'N/A'}</p>
                    <p><strong>Vehicle Class: </strong>{store.vehicleProperties.properties.vehicle_class || 'N/A'}</p>
                    <p><strong>Manufacturer: </strong>{store.vehicleProperties.properties.manufacturer || 'N/A'}</p>
                    <p><strong>Cost in credits: </strong>{store.vehicleProperties.properties.cost_in_credits || 'N/A'}</p>
                    <p><strong>Length: </strong>{store.vehicleProperties.properties.length || 'N/A'}</p>
                    <p><strong>Crew: </strong>{store.vehicleProperties.properties.crew || 'N/A'}</p>
                    <p><strong>Passengers: </strong>{store.vehicleProperties.properties.passengers || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default LearnMoreVehicle;