const preguntas = [
    { id: 1, texto: '¿Aparecen pantallazos azules a la hora de abrir tus aplicaciones o juegos, más conocidas como las pantallas de la muerte?' },
    { id: 2, texto: '¿El PC o portátil tarda bastante tiempo en arrancar, incluso contando con sistemas de almacenamiento de alta velocidad?' },
    { id: 3, texto: '¿El equipo hace pitidos cuando se enciende?' },
    { id: 4, texto: '¿Pueden producirse errores o fallos en el momento de instalar nuevos programas en tu equipo?' },
    { id: 5, texto: '¿Cuanto mayor sea el tiempo que tu PC o portátil se encuentra encendido, mucho más lento va todo, lo que termina obligando a reiniciar al equipo?' },
    { id: 6, texto: '¿El sistema impide acceder a determinados archivos del disco duro, avisando de que los mismos se encuentran corrompidos?' },
    { id: 7, texto: '¿Bloqueos repentinos de tu ratón o teclado, dejando de responder inesperadamente?' },
    { id: 8, texto: '¿La memoria RAM no es reconocida por tu dispositivo o equipo?' },
    { id: 9, texto: '¿Tu sistema operativo mostrará una falta de memoria RAM?' }
];

let indicePreguntaActual = 0;
let respuestas = [];

document.addEventListener('DOMContentLoaded', () => {
    mostrarPregunta();
    document.getElementById('reiniciar-btn').style.display = 'none';
});

function mostrarPregunta() {
    const preguntaContainer = document.getElementById('pregunta-container');
    preguntaContainer.innerHTML = `
        <p>${preguntas[indicePreguntaActual].texto}</p>
        <label>
            <input type="radio" name="respuesta" value="si"> Sí
        </label>
        <label>
            <input type="radio" name="respuesta" value="no"> No
        </label>
    `;
}

function manejarSiguiente() {
    const seleccion = document.querySelector('input[name="respuesta"]:checked');
    if (!seleccion) {
        alert('Por favor, selecciona una respuesta.');
        return;
    }

    respuestas.push(seleccion.value);
    indicePreguntaActual++;

    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        calcularResultado();
    }
}

function calcularResultado() {
    const conteoSi = respuestas.filter(respuesta => respuesta === 'si').length;
    let resultado;

    if (conteoSi >= 7) {
        resultado = 'Resultado: Tu memoria RAM parece estar en mal estado. Considera reemplazarla.';
    } else if (conteoSi >= 4) {
        resultado = 'Resultado: Podrías tener problemas con tu memoria RAM. Revisa y prueba tu RAM.';
    } else {
        resultado = 'Resultado: Tu memoria RAM parece estar en buen estado.';
    }

    const preguntaContainer = document.getElementById('pregunta-container');
    preguntaContainer.innerHTML = `<p>${resultado}</p>`;
    document.getElementById('siguiente-btn').style.display = 'none';
    document.getElementById('reiniciar-btn').style.display = 'block';
}

function reiniciarTest() {
    indicePreguntaActual = 0;
    respuestas = [];
    document.getElementById('siguiente-btn').style.display = 'block';
    document.getElementById('reiniciar-btn').style.display = 'none';
    mostrarPregunta();
}

