/* En esta preentrega realizaré un programa para cálcular la 
nota final de una lista predeterminada de alumnos de una clase y se determinará si aprueban o no.
Donde calificaremos de 1 a 10, y promedio para aprobar será por igual o mayor a 6.*/

const btn1 = document.getElementById("btn1");
const tocarBoton = btn1.addEventListener("click", () => {
    identificarse();
});

let alumnos = ["Juan", "Ana", "Pedro"];
let notaFinal = 0;
let nombreAlumno; // Declarar la variable a nivel global

function identificarse() {
    nombreAlumno = prompt("¡Hola!, por favor ingrese el nombre del alumno a consultar: ");

    if (!alumnos.includes(nombreAlumno) || nombreAlumno === "" || !isNaN(parseFloat(nombreAlumno))) {
        alert("El nombre del alumno ingresado no existe o es inválido. Verifique la información.");
        identificarse(); // Llamada recursiva para volver a pedir el nombre
    } else {
        alert("Es un gusto saludarle,  " + nombreAlumno);
        notas(); // Llamar a la función de notas después de identificar al alumno
    }
}

function notas() {
    let nota1 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su primera nota de 1 a 10: ."));
    let nota2 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su segunda nota de 1 a 10: ."));
    let nota3 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su tercera nota de 1 a 10: ."));

    if ((nota1 > 10 || nota1 < 1) || (nota2 > 10 || nota2 < 1) || (nota3 > 10 || nota3 < 1)) {
        alert("Ha ingresado un valor inválido, por favor empiece de nuevo.");
        notas(); // Llamada recursiva para volver a ingresar las notas
    } else {
        notaFinal = (nota1 + nota2 + nota3) / 3;

        if (notaFinal >= 6) {
            alert(nombreAlumno + " el promedio de tus notas es: " + notaFinal + ", felicitaciones, aprobó.");
        } else {
            alert(nombreAlumno + " el promedio de tus notas es: " + notaFinal + ", lo sentimos, reprobó.");
        }

        // Almacenar los resultados para imprimir al final
        resultados.push({ nombre: nombreAlumno, notaFinal: notaFinal, estado: notaFinal >= 6 ? "Aprobado" : "Reprobado" });
    }
}

// identificarse(); // Comentado para que no se ejecute automáticamente al cargar la página

// Almacenar los resultados de cada alumno
let resultados = [];

// Llamar identificarse para cada alumno
for (let i = 0; i < alumnos.length; i++) {
    identificarse();
}

// Imprimir resultados al final
for (let i = 0; i < resultados.length; i++) {
    alert(`${resultados[i].nombre} - Nota Final: ${resultados[i].notaFinal} - ${resultados[i].estado}`);
}





