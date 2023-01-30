const scripturl = 'https://script.google.com/macros/s/AKfycbzV0mNgYuocq0L3fKwopOuGvblcu0956N89ln44FLgunsk-gDEVIgvDx-WibZCP8sgkmw/exec';

    const f = document.forms['sheet'];

    f.addEventListener('submit', (e) => {  
        e.preventDefault()

    fetch(scripturl, { method: 'POST', body: new FormData(f)
    })

        let formUp_area = document.querySelector('.form-popUp')
        let formUpContent = document.querySelector('.form-area--popUp')
        let formUpContent_titulo = document.querySelector('.popUp-titulo p')
        let formUpContent_form = document.querySelector('.popUp-form')
        let formUp_btnCancelar = document.querySelector('.btn-cancelar')
        

        formUp_area.style.display = "flex"

        formUpContent_form.style.display = "none"
        formUpContent_titulo.innerHTML = "Obrigado por sua inscrição!"

            
        let h3 = document.createElement("h3")
        let texth3 = document.createTextNode("Em breve nossa equipe entrará em contato.")

        h3.classList.add("pop-up--h3")

        h3.appendChild(texth3)
        formUpContent.appendChild(h3)

        if(style.display === "flex"){
            let btnEnviar = document.getElementsByClassName('botao--wa').style.zIndex = 0;
        }


        formUpContent_form.style.display = "none"

        let btnclose = document.querySelector('.btn-cancelar')
        btnclose.addEventListener('click', () =>{
        formUP.style.display = "none"

        let bgHeader = document.querySelector("header").style.filter="blur(0px)";
        let bgMain = document.querySelector("main").style.filter="blur(0px)";
        let bgFooter = document.querySelector("footer").style.filter="blur(0px)";
    })


})