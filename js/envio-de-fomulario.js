    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV0mNgYuocq0L3fKwopOuGvblcu0956N89ln44FLgunsk-gDEVIgvDx-WibZCP8sgkmw/exec';

    const form = document.forms['google-sheet1'];

    const formPop = document.querySelector('.form-popUp')

    form.addEventListener('submit', (e) => {  

    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)
    }).then(response => {

        let formUp_area = document.querySelector('.form-popUp')
        let formUpContent = document.querySelector('.form-area--popUp')
        let formUpContent_titulo = document.querySelector('.popUp-titulo p')
        let formUpContent_form = document.querySelector('.popUp-form')
        let formUp_btnCancelar = document.querySelector('.btn-cancelar')
        

        formUp_area.style.display = "flex"

        formUpContent_form.style.display = "none"
        formUpContent_titulo.innerHTML = "Obrigado por sua inscrição!"

            
        let h2 = document.createElement("h2")
        let texth2 = document.createTextNode("Em breve nossa equipe entrará em contato.")

        h2.classList.add("pop-up--h2")

        h2.appendChild(texth2)
        formUpContent.appendChild(h2)

        if(formUp_area.style.display === "flex"){
           let btn_S =  document.getElementsByClassName('botao--wa').style.zIndex = 0;
        }


        formUpContent_form.style.display = "none"

        let btnSubmit = document.querySelector('.btn-form').innerHTML = "Obrigado"

        form.reset()

        let btnclose = document.querySelector('.btn-cancelar')
        btnclose.addEventListener('click', () =>{
        formUP.style.display = "none"

        let bgHeader = document.querySelector("header").style.filter="blur(0px)";
        let bgMain = document.querySelector("main").style.filter="blur(0px)";
        let bgFooter = document.querySelector("footer").style.filter="blur(0px)";

        window.location.reload()

        })
        
        //alert("Obrigado por sua inscrição!")

        
        })

    })  
    