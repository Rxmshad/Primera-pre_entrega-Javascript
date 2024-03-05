alert ("¡BIENVENIDO!")
let nombre = prompt ("Para empezar, ¿Cuál es tu nombre?")

alert("Muy bien " + nombre +", Vamos a jugar a piedra, papel o tijeras  ¿Estás listo?")


console.log("Conectado");


jugarJuego();
function eligeMovimientoComputadora() {
  const randomNumber = Math.random();
  let eleccionComputadora = "";
  
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    eleccionComputadora = "Piedra";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    eleccionComputadora = "Papel";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    eleccionComputadora = "Tijera";
  }
  
  return eleccionComputadora;
}

function jugarJuego() {
  let usuarioGana = 0;
  let computadoraGana = 0;

  while (usuarioGana < 2 && computadoraGana < 2) {
    const inputUsuario = prompt(
      "Gana el mejor de 3.\nEscribe Piedra, Papel o Tijera:"
    );
    if (inputUsuario === null) {
      break; 
    }

   
    const eleccionUsuario =
      inputUsuario.trim().charAt(0).toUpperCase() +
      inputUsuario.trim().slice(1).toLowerCase();

   
    if (
      eleccionUsuario === "Piedra" ||
      eleccionUsuario === "Papel" ||
      eleccionUsuario === "Tijera"
    ) {
      const eleccionComputadora = eligeMovimientoComputadora();

      let resultado = "";
   
      if (eleccionUsuario === "Tijera") {
        if (eleccionComputadora === "Piedra") {
          resultado = "PERDISTE";
          computadoraGana++;
        } else if (eleccionComputadora === "Papel") {
          resultado = "GANASTE";
          usuarioGana++;
        } else {
          resultado = "EMPATE";
        }
      } else if (eleccionUsuario === "Papel") {
        if (eleccionComputadora === "Piedra") {
          resultado = "GANASTE";
          usuarioGana++;
        } else if (eleccionComputadora === "Papel") {
          resultado = "EMPATE";
        } else {
          resultado = "PERDISTE";
          computadoraGana++;
        }
      } else if (eleccionUsuario === "Piedra") {
        if (eleccionComputadora === "Piedra") {
          resultado = "EMPATE";
        } else if (eleccionComputadora === "Papel") {
          resultado = "PERDISTE";
          computadoraGana++;
        } else {
          resultado = "GANASTE";
          usuarioGana++;
        }
      }

      alert(
        `${resultado}. Elegiste ${eleccionUsuario}. Computadora eligió ${eleccionComputadora}.`
      );
    } else {
      alert(
        "Lo que escribiste no es aceptable para poder jugar. Por favor, elige entre Piedra, Papel o Tijera."
      );
    }
  }

  if (usuarioGana >= 2) {
    alert("Felicidades " + nombre + ', ganaste el mejor de 3');
  } else {
    alert("La computadora te gano el mejor de 3.");
  }
}

