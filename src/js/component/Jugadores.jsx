import React from "react";

const Jugadores = ({ setJugador1, setJugador2, setOpcion }) => {


    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control border-5 border-top-0 border-start-0 border-end-0"
                            placeholder="Jugador 1" aria-label="Jugador 1" onChange={(e) => setJugador1(e.target.value)} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control border-5 border-top-0 border-start-0 border-end-0"
                            placeholder="Jugador 2" aria-label="Jugador 2" onChange={(e) => setJugador2(e.target.value)} />
                    </div>
                </div>
                <div className="row iconos">
                    <div className="col">
                        <button className="btn btn-secondary" onClick={() => setOpcion('X')}>X</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary" onClick={() => setOpcion('O')}>O</button>
                    </div>
                </div>
            </div>
        </>

    )

};

export default Jugadores;