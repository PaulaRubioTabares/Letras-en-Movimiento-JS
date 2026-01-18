window.addEventListener("load", () => {

    let title = document.querySelector(".title"); /* Selector del h1*/
    let text = "¡Bienvenido al Curso!";

    let letterStart = 0;
    let letterEnd = 1;



    let write = () => {
        setInterval(() => {

            title.innerText = text.slice(letterStart, letterEnd);

            letterEnd++;

            if(letterEnd > text.length){
                letterEnd = 1;
            } 

        }, 150);
    };

    write();

});   


/* El text.slice corta cada carácter de la palabra, según el número de la posición en la que esta iniciando siempre en 0 además con letterEnd++; se va corriendo la posición hasta n número, cada 150ms*/