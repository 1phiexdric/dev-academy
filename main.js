//hay un error al hacer click en la pantalla y presionar enter se muestra en la consola
//el mensaje de la ultima pregunta

let puntos = 0
console.log(puntos)

function getname() {
    let inputname = document.getElementById("namex_id")
    let nombre = inputname.value
    console.log("Hola " + nombre)
};

function question1() {
    let a1 = document.getElementById("q1");
    let valor = a1.value;
    if (valor == 8) {
        puntos++
        console.log(`la respuesta es correcta
Tus puntos: ${puntos}`)
    } else {
        console.log("Respuesta incorrecta")
    }
}


function protocolo1() {
    let select = document.getElementById("protocolo");
    let valor = select.value;
    console.log("la respuesta fue:" + valor)
    switch (valor) {
        case "POW":
            console.log("respuesta incorrecta")
            break;
        case "POH":
            console.log("respuesta incorrecta")
            break;
        case "POS":
            puntos++
            console.log(`respuesta correcta
Tus puntos: ${puntos}`)
            break;
        case "POA":
            console.log("Respuesta incorrecta")
    }
}
//ojala puediera declararle mi amor, pero solo puedo declarar variables

function nft() {
    const respuestas = document.getElementsByName("lenguaje");
    for (let contador = 0; contador < respuestas.length; contador++) {
        if (respuestas[contador].checked) {
            let seleccionado = respuestas[contador].value;
            console.log("Se eligio: " + seleccionado)
            if (seleccionado == "Non-Fungible-token") {
                puntos++
                console.log(`Respuesta correcta
Tus puntos ${puntos}`)
            } else {
                console.log("respuesta incorrecta")
            }
        }
    }

}



function Explorador1() {
    const arrayrespuestas = document.getElementsByName("ex");
    for (let contador = 0; contador < arrayrespuestas.length; contador++) {
        if (arrayrespuestas[contador].checked) {
            let seleccionado = arrayrespuestas[contador].value;
            console.log("Se eligio: " + seleccionado)
            if (seleccionado == "Explorador de bloques") {
                puntos++
                console.log(`Respuesta correcta
Tus puntos ${puntos}`)
            } else {
                console.log("respuesta incorrecta")
            }
        }
    }

}


let respuestasCorrectas = new Set(["Gulf stream", "Cloudbreak", "Tower BFT", "Pipelining"]);

function verificarRespuestas() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let respuestasUsuario = Array.from(checkboxes).map(checkbox => checkbox.value);

  let respuestasIncorrectas = new Set([...respuestasUsuario].filter(x => !respuestasCorrectas.has(x)));
  let respuestasCorrectasUsuario = new Set([...respuestasUsuario].filter(x => respuestasCorrectas.has(x)));

  if (respuestasIncorrectas.size === 0 && respuestasCorrectasUsuario.size === respuestasCorrectas.size) {
    puntos+=5
    console.log("Todas tus respuestas son correctas. Tus puntos: " + puntos);
  }//else{
  //   console.log("Algunas respuestas son incorrectas")
 // }
}

