

/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} elemento imagen de la carta esta se regresa para ser añadida al DOM
 */
export const crearCartaHTML = (carta) => {
const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}    