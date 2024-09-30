let array = [ 7, 4, 5, 9, 6];

function listaNotas() {
    let lista = document.getElementById("listaNotas");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar elementos

    for (let nota of array) {
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularpromedio() {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    let promedio = (suma / array.length);
    document.getElementById("promedio").textContent = promedio.toFixed(2); // Mostrar 2 decimales
}

function notaMasAlta() {
    let notaAlta = array[0]; // Inicializar con el primer elemento
    for (let i = 1; i < array.length; i++) { // Comenzar desde el segundo elemento
        if (array[i] > notaAlta) {
            notaAlta = array[i];
        }
    }
    document.getElementById("Notas").textContent = notaAlta;
}

function hayPlazo() {
    let aplazo = "No";
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 4) {
            aplazo = "Si";
            break;
        }
    }
    document.getElementById("aplazo").textContent = aplazo;
}
