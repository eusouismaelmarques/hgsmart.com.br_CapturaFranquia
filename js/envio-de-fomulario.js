    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV0mNgYuocq0L3fKwopOuGvblcu0956N89ln44FLgunsk-gDEVIgvDx-WibZCP8sgkmw/exec';

    const form = document.forms['google-sheet1'];

    const formPop = document.querySelector('.form-popUp')

    form.addEventListener('submit', (e) => {  

    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)
    }).then(response => {console.log("Enviado")})
    })  
    