document.addEventListener("DOMContentLoaded", function(){

let container = document.getElementsByTagName("div")[0];
let button = this.documentElement.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
    event.stopPropagation();
    alert('Hola!');
});

container.addEventListener("click", function(){
    event.stopPropagation();
    alert('Hola! Soy el div');
});

});