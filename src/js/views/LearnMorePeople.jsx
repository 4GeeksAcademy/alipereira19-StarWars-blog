import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const LearnMorePeople = () => {
    const { store, actions } = useContext(Context);
    const getInfoPeople = async () => {
        try {
            await actions.getMorePeople()
        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        getInfoPeople();
    }, []);

    return (
        <div className="container mb-1" style={{ marginTop: '80px' }}>
            <h1 className="text-center" style={{ color: "rgb(255, 25, 25)" }} >{store.properties.properties.name || "Details"}</h1>
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com//assets/img/characters/${store.properties.uid}.jpg`}
                    className="card-img-top"
                    alt={store.properties.properties.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Type: People</h5>
                    <p><strong>Height: </strong>{store.properties.properties.height || 'N/A'}</p>
                    <p><strong>Mass: </strong>{store.properties.properties.mass || 'N/A'}</p>
                    <p><strong>Hair Color: </strong>{store.properties.properties.hair_color || 'N/A'}</p>
                    <p><strong>Skin Color: </strong>{store.properties.properties.skin_color || 'N/A'}</p>
                    <p><strong>Eye Color: </strong>{store.properties.properties.eye_color || 'N/A'}</p>
                    <p><strong>Birth Year: </strong>{store.properties.properties.birth_year || 'N/A'}</p>
                    <p><strong>Gender: </strong>{store.properties.properties.gender || 'N/A'}</p>
                    <p><strong>Description: </strong>{store.properties.description || 'N/A'}</p>
                </div>
            </div>
        </div>
    );

}

export default LearnMorePeople