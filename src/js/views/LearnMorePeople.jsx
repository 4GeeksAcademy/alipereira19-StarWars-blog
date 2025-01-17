import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const LearnMorePeople = ({ character }) => {
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
        <div className="container my-4">
            <h1 className="text-center">{character.name || "Details"}</h1>
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com//assets/img/characters/${character.uid}.jpg`}
                    className="card-img-top"
                    alt={character.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Type: People</h5>
                    <p><strong>Height: </strong>{character.height || 'N/A'}</p>
                    <p><strong>Mass: </strong>{character.mass || 'N/A'}</p>
                    <p><strong>Hair Color: </strong>{character.hair_color || 'N/A'}</p>
                    <p><strong>Skin Color: </strong>{character.skin_color || 'N/A'}</p>
                    <p><strong>Eye Color: </strong>{character.eye_color || 'N/A'}</p>
                    <p><strong>Birth Year: </strong>{character.birth_year || 'N/A'}</p>
                    <p><strong>Gender: </strong>{character.gender || 'N/A'}</p>
                </div>
            </div>
        </div>
    );

}

export default LearnMorePeople