/* En esta preentrega realizaré un programa para cálcular la 
nota final de una lista predeterminada de alumnos de una clase y se determinará si aprueban o no.
Donde calificaremos de 1 a 10, y promedio para aprobar será igual o mayor a 6.*/


// Almacenar los resultados de cada alumno
let resultados = [];

const btn1 = document.getElementById("btn1");
let alumnos = ["Juan", "Ana", "Pedro"];
let indiceAlumno = 0; // Variable para rastrear el índice del alumno actual.

btn1.addEventListener("click", () => {
    identificarse();
});

function identificarse() {
    if (indiceAlumno < alumnos.length) {
        nombreAlumno = prompt("¡Hola!, por favor ingrese el nombre del alumno a consultar: ");

        if (!alumnos.includes(nombreAlumno) || nombreAlumno === "" || !isNaN(parseFloat(nombreAlumno))) {
            alert("El nombre del alumno ingresado no existe o es inválido. Verifique la información.");
        } else if (resultados.some((resultado) => resultado.nombre === nombreAlumno)) {
            alert("Ya se ingresaron las notas para este alumno. Por favor, elija otro.");
        } else {
            alert("Es un gusto saludarle, " + nombreAlumno);
            notas();
        }
    } else {
        // Ya se ingresaron las notas para todos los alumnos
        mostrarResultados();
    }
}

function notas() {
    let nota1 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su primera nota de 1 a 10: ."));
    let nota2 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su segunda nota de 1 a 10: ."));
    let nota3 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su tercera nota de 1 a 10: ."));

    if ((nota1 > 10 || nota1 < 1) || (nota2 > 10 || nota2 < 1) || (nota3 > 10 || nota3 < 1)) {
        alert("Ha ingresado un valor inválido, por favor empiece de nuevo.");
        notas();
    } else {
        let notaFinal = (nota1 + nota2 + nota3) / 3;

        if (notaFinal >= 6) {
            alert(nombreAlumno + " el promedio de tus notas es: " + notaFinal + ", felicitaciones, aprobó.");
        } else {
            alert(nombreAlumno + " el promedio de tus notas es: " + notaFinal + ", lo sentimos, reprobó.");
        }

        resultados.push({ nombre: nombreAlumno, notaFinal: notaFinal, estado: notaFinal >= 6 ? "Aprobado" : "Reprobado" });

        // Pasar al siguiente alumno
        indiceAlumno++;
        identificarse();
    }
}

function mostrarResultados() {
    let mensajeFinal = "Resultados finales:\n";

    for (let i = 0; i < resultados.length; i++) {
        mensajeFinal += `${resultados[i].nombre} - Nota Final: ${resultados[i].notaFinal} - ${resultados[i].estado}\n`;
    }

    alert(mensajeFinal);
};




