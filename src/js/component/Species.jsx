import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa";


const Species = () => {
    const { store, actions } = useContext(Context);
    const [page, setPage] = useState(1)
    const navigate = useNavigate();


    const nextSpecies = async () => {
        try {
            const nextPage = page + 1;
            setPage(nextPage)
            await actions.getSpecies(nextPage)
            console.log("esta es la pagina", page);

        } catch (error) {
            console.error(error);

        }
    };
    const previousSpecies = async () => {
        try {
            if (page > 1) {
                const prevPage = page - 1;
                setPage(prevPage);
                await actions.getSpecies(prevPage)
                console.log("esta es la pagina", page);
            }

        } catch (error) {
            console.error(error);

        }
    };

    const handlerGetSpecies = async () => {
        try {
            await actions.getSpecies(page);
        } catch (error) {
            console.error(error);

        }
    };

    const handlerMoreDetails = async (id) => {
        try {
            await actions.getMoreSpecies(id);
            navigate("/morespecies")

        } catch (error) {
            console.error(error);
        }
    };

    const handlerFav = async (item) => {
        try {
            await actions.addToFavorites(item);
            console.log(handlerFav)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handlerGetSpecies();
        setPage(1)
    }, []);
    return (
        <div className="container my-4">
            <h1 className="" style={{ backgroundImage: `url(${'https://www.denofgeek.com/wp-content/uploads/2021/03/star-wars-alien-species-sith-chiss-kaminoans-rakata.jpg?fit=1920%2C1080'})`, backgroundSize: '200px 200px', backgroundPosition: 'top', color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', fontSize: '100px' }}>Species</h1>
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
                    store.species && store.species.map((species) => {
                        return (
                            <div className="card" style={{
                                minWidth: "200px",
                                minHeight: "400px",
                                backgroundColor: "rgb(34, 34, 34)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                borderRadius: "8px",
                                marginLeft: "3px",
                                marginRight: "3px",
                            }} key={species.uid} >
                                <img src={`https://starwars-visualguide.com//assets/img/species/${species.uid}.jpg`} className="card-img-top text-white" alt="Imagen no disponible en tu país/región" />
                                <div className="card-body ">
                                    <h5 className="card-title" style={{ color: "rgb(255, 25, 25)" }}>{species.name}</h5>
                                    <br />
                                    <button style={{ background: "rgb(102, 102, 102)" }} className="btn btn-md text-light" onClick={() => handlerMoreDetails(species.uid)}>Learn More!</button>
                                    <button className="btn btn-sm border border-dark rounded text-warning" onClick={() => handlerFav(species)}><FaStar />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div style={{ marginTop: '10px' }}>
                <button className="btn btn-lg border border-dark rounded text-light" onClick={previousSpecies}><GrCaretPrevious />
                </button>
                <button className="btn btn-lg border border-dark rounded text-light" onClick={nextSpecies}><GrCaretNext />
                </button>
            </div>
        </div>
    )
}

export default Species;