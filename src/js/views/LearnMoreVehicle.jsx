import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const LearnMoreVehicle = () => {
    const { store, actions } = useContext(Context);
    const getInfoVehicles = async () => {
        try {
            await actions.getMoreVehicles()
        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        getInfoVehicles();
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
                    <h1 className="card-title">Type: Vehicle</h1>
                    <h3><strong>Model: </strong>{store.vehicleProperties.properties.model || 'N/A'}</h3>
                    <h3><strong>Vehicle Class: </strong>{store.vehicleProperties.properties.vehicle_class || 'N/A'}</h3>
                    <h3><strong>Manufacturer: </strong>{store.vehicleProperties.properties.manufacturer || 'N/A'}</h3>
                    <h3><strong>Cost in credits: </strong>{store.vehicleProperties.properties.cost_in_credits || 'N/A'}</h3>
                    <h3><strong>Length: </strong>{store.vehicleProperties.properties.length || 'N/A'}</h3>
                    <h3><strong>Crew: </strong>{store.vehicleProperties.properties.crew || 'N/A'}</h3>
                    <h3><strong>Passengers: </strong>{store.vehicleProperties.properties.passengers || 'N/A'}</h3>
                    <h3><strong>Max atmosphering speed: </strong>{store.vehicleProperties.properties.max_atmosphering_speed || 'N/A'}</h3>
                    <h3><strong>Cargo capacity: </strong>{store.vehicleProperties.properties.cargo_capacity || 'N/A'}</h3>
                    <h3><strong>Consumables: </strong>{store.vehicleProperties.properties.consumables || 'N/A'}</h3>
                </div>
            </div>
        </div>
    );
}

export default LearnMoreVehicle;