import React, { useState } from "react";

const Bloque = ({ value, onClick }) => {
	return (
		<button className="bloque bg-dark" onClick={onClick}>
			{value}
		</button>
	);
};

function Tablero() {


	const [bloque, setBloque] = useState(Array(9).fill(null))
	const [esX, setEsX] = useState(true);

	const handleClick = (i) => {
		if (patronGanador(bloque) || bloque[i]) {
			return
		}
		bloque[i] = esX ? 'X' : 'O'
		setBloque(bloque)
		setEsX(!esX)
	}

	const ganador = patronGanador(bloque)
	let turno;

	if (ganador) {
		turno = `El ganador es: ${ganador}`;
	} else {
		turno = 'Siguiente Jugador: ' + (esX ? 'X' : 'O');
	}

	const reiniciar = () => {
		setEsX(true)
		setBloque(Array(9).fill(null))
	}

	const renderBloque = (i) => {
		return <Bloque value={bloque[i]} onClick={() => handleClick(i)} />
	}

	return (
		<div className="tablero">
			<button className="reiniciar btn btn-dark" onClick={reiniciar}>¡Reiniciar Juego!</button>
			<div className="turno">{turno}</div>

			<div className="filaTablero">
				{renderBloque(0)}
				{renderBloque(1)}
				{renderBloque(2)}
			</div>
			<div className="filaTablero">
				{renderBloque(3)}
				{renderBloque(4)}
				{renderBloque(5)}
			</div>
			<div className="filaTablero">
				{renderBloque(6)}
				{renderBloque(7)}
				{renderBloque(8)}
			</div>
		</div>
	)
}

function patronGanador(bloque) {
	const patrones = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < patrones.length; i++) {
		const [a, b, c] = patrones[i];
		if (bloque[a] && bloque[a] === bloque[b] && bloque[a] === bloque[c]) {
			return bloque[a];
		}
	}
	return null;
}

export default Tablero;