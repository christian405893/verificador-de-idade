function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
   var minutes = data.getMinutes()
   
    msg.innerHTML = `agora são ${hora} horas e ${minutes} minutos`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background ='#eac7a7'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#d65805'
    } else {
        // BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#01213a'
    }
// o erro estava no scr q na vdd é src
 }