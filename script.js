//funcion que aoplica estilo a la oipcion seleccionada en el menu y quita la previamente selecionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    //hacemos desaparecer el menu una vez seleccionado la opcion responsive
    var x = document.getElementById("nav");
    x.className = "";
}
//funcion para mostrar el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className==="") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//detecto el scrollbar para aplicar la animacion a las barras de hobbies
window.onscroll = function () {
    efectoHobbies();
}
//funcion que aplica la animacion ala barra de hobbies
function efectoHobbies() {
    var hobbies = document.getElementById("hobbies");
    var distancia = window.innerHeight - hobbies.getBoundingClientRect().top;
    if (distancia >= 300) {
        document.getElementById("musica").classList.add("barra-progreso1");
        document.getElementById("futbol").classList.add("barra-progreso2");
        document.getElementById("juegos").classList.add("barra-progreso3");
        document.getElementById("bootcamp").classList.add("barra-progreso4");
    }
}