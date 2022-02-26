function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[Error] verifique os dados e tente novamente')
    } else {
        var fsex
    }
}