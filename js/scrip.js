let formUP = document.querySelector('.form-popUp')


function btnUp(){

    formUP.style.display = "flex"
    let bgHeader = document.querySelector("header").style.filter="blur(2px)";
    let bgMain = document.querySelector("main").style.filter="blur(2px)";
    let bgFooter = document.querySelector("footer").style.filter="blur(2px)";

    

}


// Fechar pop-up


let btnclose = document.querySelector('.btn-cancelar')


    btnclose.addEventListener('click', () =>{
    formUP.style.display = "none"

    let bgHeader = document.querySelector("header").style.filter="blur(0px)";
    let bgMain = document.querySelector("main").style.filter="blur(0px)";
    let bgFooter = document.querySelector("footer").style.filter="blur(0px)";

    window.location.reload()
})
