storage = window.localStorage;
let persona = { "nombre":null, "edad":null, "genero":null,"pulsaciones":null};
var cont = 0;
var personas = [];

function Guardar(){
    nombre = document.getElementById("nombre");
    genero = document.getElementById("genero");
    edad = document.getElementById("edad");
    if(nombre.value && edad.value && genero.value){
        persona = { "nombre":nombre.value, "edad":edad.value, "genero":genero.value,"pulsaciones":CalcularPulsaciones(genero.value,edad.value)};
        if (typeof(Storage) !== "undefined") {
            var p = JSON.parse(storage.getItem('personas'));
            if(p){
                personas = p;
                cont = p.length;   
                console.log(personas);
            }
            personas[cont] = persona;
            storage.setItem("personas", JSON.stringify(personas));
            alert("Guardado correctamente "+persona.nombre);
            Limpiar();
        } else {
            alert("Error al almacenar la información");
        }
        console.log(personas);
    }else{
    	alert("Llene todos los campos");
    }
}

function MostrarPulsaciones(){
    genero = document.getElementById("genero");
    edad = document.getElementById("edad");
    if(edad.value && genero.value){
        document.getElementById("valorPulsacion").innerHTML = `${"Pulsaciones : "+CalcularPulsaciones(genero.value,edad.value)}`;
    }else{
        alert("Debe seleccionar el genero e insertar la edad");
    }
}

function CalcularPulsaciones(genero, edad){
    if(genero == "Masculino"){
        return (210-edad)/10;
    }else{
        return (220-edad)/10;
    }
}

function Limpiar(){
    document.getElementById("nombre").innerHTML = "";
    document.getElementById("edad").innerHTML = "";
    document.getElementById("valorPulsacion").innerHTML = o;
}

