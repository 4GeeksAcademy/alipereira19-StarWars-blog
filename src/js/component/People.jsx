import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People = () => {
    //const [character, setCharacter] = useState([]);
    const { store, actions } = useContext(Context);
    const handlerGetPeople = async () => {
        try {
            await actions.getPeople();
        } catch (error) {
            console.error(error);

        }
    }
    useEffect(() => {
        handlerGetPeople();
    }, []);
    return (

        <div className="container" style={{ width: '18rem' }}>
            <h1>People</h1>
            {
                store.people && store.people.map((item, index) => {
                    return (
                        <div className="card" style={{ width: '18rem' }} key={index} >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>

                                <button>mostar mas</button>
                            </div>
                        </div>
                    )
                })}

        </div>

    )
}

export default People; 