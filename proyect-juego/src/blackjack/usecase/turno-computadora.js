import { pedirCarta } from "./";
/**
 * 
 * @param {Number} puntosMinimos : puntos que la computadora necesita para ganar
 * @param {Array<HTMLElement>} puntosHTML : arreglo con los elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora : div donde se muestran las cartas de la computadora
 * @param {Array<String>} deck 
 * 
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora ,deck =[]) => {

    if ( !puntosMinimos ) throw new Error("Puntos minimos son necesarios");
    if ( !puntosHTML ) throw new Error("Puntos HTML son necesarios");

    do {
        const carta = pedirCarta(deck);
        let puntosComputadora = 0;
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana ');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana ');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana ');
        } else {
            alert('Computadora gana ');
        }
    }, 100);
}