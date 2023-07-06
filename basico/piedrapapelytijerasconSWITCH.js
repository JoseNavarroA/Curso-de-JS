jugador = "Piedra"
cpu = "Papel"

switch (jugador) {
    case "Piedra":
        (jugador === cpu)
        console.log("Empate");
    
    case (jugador === "Piedra" && cpu === "Papel"):
        console.log("Cpu gana");
        break;            
    case (jugador === "Piedra" && cpu === "Tijera"):
        console.log("Jugador gana");
        break;
    case (jugador === "Papel" && cpu === "Tijera"):
        console.log("Cpu gana");
        break;
    case (jugador === "Papel" && cpu === "Piedra"):
        console.log("Jugador gana");
        break;
    case (jugador === "Tijeras" && cpu === "Piedra"):
        console.log("Cpu gana");
        break;
    case (jugador === "Tijeras" && cpu === "Papel"):
        console.log("Jugador gana");
        break;
        
        }

