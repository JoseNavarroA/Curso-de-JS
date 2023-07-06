jugador = "Piedra"
cpu = "Papel"


if(jugador === cpu){
console.log("Empate");
}else if(jugador != cpu){
    if(jugador === "Piedra" && cpu === "Papel"){
        console.log("Cpu gana");
    }else if(jugador === "Piedra" && cpu === "Tijera"){
        console.log("Jugador gana")
    }else if(jugador === "Papel" && cpu === "Tijera"){
        console.log("Cpu gana")
    }else if(jugador === "Papel" && cpu === "Piedra"){
        console.log("Jugador gana")
    }else if(jugador === "Tijeras" && cpu === "Piedra"){
        console.log("Cpu gana")
    }else if(jugador === "Tijeras" && cpu === "Papel"){
        console.log("Jugador gana")
    }
}

