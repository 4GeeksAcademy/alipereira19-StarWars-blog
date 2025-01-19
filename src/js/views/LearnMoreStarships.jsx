import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const LearnMoreStarships = () => {
    const { store, actions } = useContext(Context);
    const getInfoStarships = async () => {
        try {
            await actions.getMoreStarships()
        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        getInfoStarships();
    }, []);

    return (
        <div className="container my-4">
            <h1 className="text-center " style={{ color: "rgb(255, 25, 25)" }}>{store.starshipProperties.properties.name || "Details"}</h1>
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com//assets/img/starships/${store.starshipProperties.uid}.jpg`}
                    className="card-img-top"
                    alt={store.starshipProperties.properties.name}
                />
                <div className="card-body">
                    <h1 className="card-title">Type: Starship</h1>
                    <h3><strong>Model: </strong>{store.starshipProperties.properties.model || 'N/A'}</h3>
                    <h3><strong>Vehicle Class: </strong>{store.starshipProperties.properties.vehicle_class || 'N/A'}</h3>
                    <h3><strong>Manufacturer: </strong>{store.starshipProperties.properties.manufacturer || 'N/A'}</h3>
                    <h3><strong>Cost in credits: </strong>{store.starshipProperties.properties.cost_in_credits || 'N/A'}</h3>
                    <h3><strong>Length: </strong>{store.starshipProperties.properties.length || 'N/A'}</h3>
                    <h3><strong>Crew: </strong>{store.starshipProperties.properties.crew || 'N/A'}</h3>
                    <h3><strong>Passengers: </strong>{store.starshipProperties.properties.passengers || 'N/A'}</h3>
                    <h3><strong>Max atmosphering speed: </strong>{store.starshipProperties.properties.max_atmosphering_speed || 'N/A'}</h3>
                    <h3><strong>Cargo capacity: </strong>{store.starshipProperties.properties.cargo_capacity || 'N/A'}</h3>
                    <h3><strong>Consumables: </strong>{store.starshipProperties.properties.consumables || 'N/A'}</h3>
                    <h3><strong>Hyperdrive rating: </strong>{store.starshipProperties.properties.hyperdrive_rating || 'N/A'}</h3>
                    <h3><strong>Pilots: </strong>{store.starshipProperties.properties.pilots || 'N/A'}</h3>
                </div>
            </div>
        </div>
    );
}

export default LearnMoreStarships