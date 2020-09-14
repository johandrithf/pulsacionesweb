storage = window.localStorage;
let persona = { "nombre":null, "edad":null, "genero":null,"pulsaciones":null};
var cont = 0;
/*const personas = [ { "nombre":"Juan Rodriguez", "edad":18, "genero":"Masculino","pulsaciones":12},
            { "nombre":"Jhohandrith Figueroa", "edad":18, "genero":"Masculino","pulsaciones":12},
            { "nombre":"Juana", "edad":18, "genero":"Femenino","pulsaciones":12}];*/
let personas = [];
function OnInit(){
	array = "";
    personas = JSON.parse(storage.getItem("personas"));
    if(personas){
        console.log(personas.length);
        for (var i = 0; i <= personas.length - 1; i++) {
            persona = personas[i];
            array += `<tr><td>${persona.nombre}</td><td>${persona.edad}</td><td>${persona.genero}</td><td>${persona.pulsaciones}</td></tr>`;
        }
        document.getElementById("tablaPulsaciones").innerHTML = array;
    }else{
        document.getElementById("tablaPulsaciones").innerHTML = "No hay datos";
    }
}

function Vaciar(){
    storage.removeItem("personas");
}

