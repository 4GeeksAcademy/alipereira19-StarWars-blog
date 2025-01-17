import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People = () => {
    //const [character, setCharacter] = useState([]);
    const { store, actions } = useContext(Context);
    const [page, setPage] = useState(1)



    const nextPeople = async () => {
        try {
            const nextPage = page + 1;
            setPage(nextPage)
            await actions.getPeople(nextPage)
            console.log("esta es la pagina", page);

        } catch (error) {
            console.error(error);

        }
    };
    const previousPeople = async () => {
        try {
            if (page > 1) {
                const prevPage = page - 1;
                setPage(prevPage);
                await actions.getPeople(prevPage)
                console.log("esta es la pagina", page);
            }

        } catch (error) {
            console.error(error);

        }
    };

    const handlerLearnMore = async () => {
        await actions.getMorePeople()
    };

    const handlerGetPeople = async () => {
        try {
            await actions.getPeople(page);
        } catch (error) {
            console.error(error);

        }
    }
    useEffect(() => {
        handlerGetPeople();
        setPage(1)
    }, []);
    return (
        <div className="container my-4">
            <h1 className="" style={{ color: 'rgb(3, 93, 172)' }}>Characters</h1>
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
                    store.people && store.people.map((character) => {
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
                            }} key={character.uid} >
                                <img src={`https://starwars-visualguide.com//assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <h5 className="card-title" style={{ color: 'rgb(175, 175, 175)' }}>{character.name}</h5>
                                    <br />
                                    <Link to={"/morepeople/" + character.uid}><button>Learn More!</button></Link>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div style={{ marginTop: '10px' }}>
                <button className="btn btn-lg border border-dark rounded" onClick={previousPeople}>Previous</button>
                <button className="btn btn-lg border border-dark rounded" onClick={nextPeople}>Next</button>
            </div>
        </div>
    )
}

export default People; 