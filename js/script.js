/* En esta preentrega realizaré un programa para cálcular la 
nota final de una lista predeterminada de alumnos de una clase y se determinará si aprueban o no.
Donde calificaremos de 1 a 10, y promedio para aprobar será por igual o mayor a 6.*/

const btn1 = document.getElementById("btn1");
const tocarBoton = btn1.addEventListener("click", () => {
    identificarse();
});


 //Tenemos el listado de alumnos establecido.

 
 let alumnos = ["Juan", "Ana", "Pedro", "Maria", "Martin"]; 
 
 let notaFinal = 0;


//Validamos la existencia del alumno en nuestra base de datos mediante una función.
function identificarse(alumno, nombre) {
    let nombreAlumno = prompt("¡Hola!, por favor ingrese el nombre del alumno a consultar: ");
    
    if (nombreAlumno !== alumnos[0] && nombreAlumno != alumnos[1] && nombreAlumno != alumnos[2] && nombreAlumno != alumnos[3] && nombreAlumno != alumnos[4] || (nombreAlumno === "" && nombreAlumno == Number))  {
        alert("El nombre del alumno ingresado no existe, verifique la informacion. ", identificarse());
        
    } else {
        alert("Es un gusto saludarle,  " + nombreAlumno); 
    };
    

};



function notas (){
    let nota1 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su primera nota de 1 a 10: ."));

    let nota2 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su segunda nota de 1 a 10: ."));

    let nota3 = parseFloat(prompt(nombreAlumno + ", por favor ingrese su tercera nota de 1 a 10: ."));

    let notaFinal = (nota1 + nota2 + nota3) /3;
    
    if((nota1 > 10 || nota1 < 1) || (nota2 > 10 || nota2 < 1) || (nota3 > 10 || nota3 < 1)){
        alert("Ha ingresado un valor invalido, empiece de nuevo.")
        return notas();

    }else if(notaFinal >= 6){
        alert(nombreAlumno + " el promedio de tus notas es: " + notaFinal + ", felicitaciones, aprobó");

    }else{
        alert(nombreAlumno + " el promedio de tus notas es: " + notaFinal + ", lo sentimos, reprobó");
    }

    // alert(nombreAlumno + " El promedio de tus notas es: " + notaFinal)

};

identificarse(); 
notas();






