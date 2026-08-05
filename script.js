let pagina = 0;

const paginas = document.querySelectorAll(".pagina");

function siguiente(){

    paginas[pagina].classList.add("oculto");

    pagina++;

    if(pagina < paginas.length){
        paginas[pagina].classList.remove("oculto");
    }

}