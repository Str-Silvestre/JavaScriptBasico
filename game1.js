
var tijera = "Tijera";
var piedra = "Piedra";
var papel = "papel";

function partida(player1, cpuOption) {
    //validacion que que las variables no sean diferentes 
    if (player1 != cpuOption) {
        if (player1 == tijera && cpuOption == piedra) {
            console.log(`Perdiste: ${piedra} vence a tijera`);
        } else if (player1 == tijera && cpuOption == papel) {
            console.log(`Ganaste:  ${tijera} vence a ${papel}`);
        } else if (player1 == piedra && cpuOption == tijera) {
            console.log(`Ganaste:  ${piedra} vence a ${tijera}`);
        } else if (player1 == piedra && cpuOption == tijera) {
            console.log(`Perdiste:  ${papel} vence a ${piedra}`);
        } else if (player1 == papel && cpuOption == tijera) {
            console.log(`Perdiste:  ${tijera} vence a ${papel}`);
        } else if (player1 == papel && cpuOption == piedra) {
            console.log(`Ganaste:  ${papel} vence a ${piedra}`);
        }
    } else {
        console.log("Empate intenta de nuevo");
    }
}

partida(tijera, piedra);