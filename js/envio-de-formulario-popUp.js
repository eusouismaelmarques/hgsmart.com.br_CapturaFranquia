const scripturl = 'https://script.google.com/macros/s/AKfycbzV0mNgYuocq0L3fKwopOuGvblcu0956N89ln44FLgunsk-gDEVIgvDx-WibZCP8sgkmw/exec';

    const f = document.forms['sheet'];

    

    f.addEventListener('submit', (e) => {  

    fetch(scripturl, { method: 'POST', body: new FormData(f)
    }).then(response => {
        var formPop = document.querySelector('.form-popUp')
        formPop.style.display = "none"
    })
    
}) 