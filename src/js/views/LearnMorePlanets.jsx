import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const LearnMorePlanets = () => {
    const { store, actions } = useContext(Context);
    const getInfoPlanets = async () => {
        try {
            await actions.getMorePlanets()
        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        getInfoPlanets();
    }, []);

    return (
        <div className="container mb-1" style={{ marginTop: '80px' }}>
            <h1 className="text-center" style={{ color: "rgb(255, 25, 25)" }} >{store.planetProperties.properties.name || "Details"}</h1>
            <div className="card mx-auto" style={{ width: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com//assets/img/planets/${store.planetProperties.uid}.jpg`}
                    className="card-img-top"
                    alt={store.planetProperties.properties.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Type: Planet</h5>
                    <p><strong>Diameter: </strong>{store.planetProperties.properties.diameter || 'N/A'}</p>
                    <p><strong>Rotation period: </strong>{store.planetProperties.properties.rotation_period || 'N/A'}</p>
                    <p><strong>Orbital period: </strong>{store.planetProperties.properties.orbital_period || 'N/A'}</p>
                    <p><strong>Gravity: </strong>{store.planetProperties.properties.gravity || 'N/A'}</p>
                    <p><strong>Population: </strong>{store.planetProperties.properties.population || 'N/A'}</p>
                    <p><strong>Climate: </strong>{store.planetProperties.properties.climate || 'N/A'}</p>
                    <p><strong>Terrain: </strong>{store.planetProperties.properties.terrain || 'N/A'}</p>
                    <p><strong>Surface water: </strong>{store.planetProperties.properties.surface_water || 'N/A'}</p>
                    <p><strong>Description: </strong>{store.planetProperties.description || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default LearnMorePlanets