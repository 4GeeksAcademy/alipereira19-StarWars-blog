import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const LearnMoreSpecies = () => {
    const { store, actions } = useContext(Context);
    const getInfoSpecies = async () => {
        try {
            await actions.getMoreSpecies()
        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        getInfoSpecies();
    }, []);

    return (
        <div className="container mb-1" style={{ marginTop: '80px' }}>
            <h1 className="text-center" style={{ color: "rgb(255, 25, 25)" }} >{store.speciesProperties.properties.name || "Details"}</h1>
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com//assets/img/species/${store.speciesProperties.uid}.jpg`}
                    className="card-img-top"
                    alt={store.speciesProperties.properties.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Name: {store.speciesProperties.properties.name}</h5>
                    <p><strong>Classification: </strong>{store.speciesProperties.properties.classification || 'N/A'}</p>
                    <p><strong>Designation: </strong>{store.speciesProperties.properties.designation || 'N/A'}</p>
                    <p><strong>Average height: </strong>{store.speciesProperties.properties.average_height || 'N/A'}</p>
                    <p><strong>Average lifespan: </strong>{store.speciesProperties.properties.average_lifespan || 'N/A'}</p>
                    <p><strong>Hair colors: </strong>{store.speciesProperties.properties.hair_colors || 'N/A'}</p>
                    <p><strong>Skin colors: </strong>{store.speciesProperties.properties.skin_colors || 'N/A'}</p>
                    <p><strong>Eye colors: </strong>{store.speciesProperties.properties.eye_colors || 'N/A'}</p>
                    <p><strong>Homeworld: </strong>{store.speciesProperties.properties.homeworld || 'N/A'}</p>
                    <p><strong>Language: </strong>{store.speciesProperties.properties.language || 'N/A'}</p>
                    <p><strong>Description: </strong>{store.speciesProperties.description || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default LearnMoreSpecies