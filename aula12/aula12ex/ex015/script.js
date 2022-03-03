console.log("Teste")
function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Digite novamente')
    } else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <=15){
                //criança
                img.setAttribute('src', 'bebem.jpg')
            } else if ( idade <= 18){
                //adolecente
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade > 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'atultom.jpg')
            } else {
                //ancião(ã)
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <=15){
                //criança
                img.setAttribute('src', 'bebef.jpg')
            } else if ( idade <= 18){
                //adolecente
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade > 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultof.jpg')
            } else {
                //ancião(ã)
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAling = 'center'
       res.innerHTML = `detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}