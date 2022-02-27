function carregar(){


var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var data = new Date() //data atual

//var hora = data.getHours() //hora atual recebe data.hours
var minute = data.getMinutes()
var hora = 
msg.innerHTML = `<p>Agora são <strong>${hora}horas e ${minute} minutos</strong></p>`

if (hora >= 5 && hora <= 12) {
    // Bom dia
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
    
} else if ( hora > 12 && hora < 18) {
    // Boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#B8860B'
} else if (hora >= 18 && hora <= 23) {
    // Boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#00008B'
} else if (hora = 24 && hora >= 1 && hora <= 4) {
    // Boa madrugada
    img.src = 'mad.jpg'
    document.body.style.background = '#000000'
}
   

}