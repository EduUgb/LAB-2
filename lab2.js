
function cambiafondo(element) {
    element.style.backgroundColor = '#e2fbff';
    
}

function sevafondo(element) {
    element.style.backgroundColor = '';
}

function cambiarColor(divId, inputId) {
    let div = document.getElementById(divId);
    let color = document.getElementById(inputId).value;
    div.style.background = color;
    alert("El color de fondo ha sido cambiado a: " + color);
}
function cambiaImagen(id) {
    let div = document.getElementById(id);
    div.classList.toggle("atras");
}

function textog(Idtext){
    let div = document.getElementById(Idtext);
    div.style.fontVariant = 'small-caps';
}

function textop(Idtext){
    let div = document.getElementById(Idtext);
    div.style.fontVariant = '';
}

function tecla(event){
    if(event.key == "g" || event.keyCode == "G"){
        const div = document.getElementById("teclag"); 
        div.classList.toggle("gato");
    }
}

function aviso(id){
    alert("Este es mi talento");
}