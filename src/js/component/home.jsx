import React, { useState } from "react";
import Jugadores from "./Jugadores.jsx";
import Tablero from "./Tablero.jsx";

const Home = () => {
	const [jugador1, setJugador1] = useState('')
	const [jugador2, setJugador2] = useState('')
	const [opcion, setOpcion] = useState('')

	return (

		<>

			<h1> Tic Tac Toe </h1>
			{
				(jugador1 !== "" && jugador2 !== "" && opcion !== "") ? (
					<Tablero />
				)
					: (
						<Jugadores setJugador1={setJugador1} setJugador2={setJugador2} setOpcion={setOpcion} />
					)
			}


		</>
	)
}

export default Home;