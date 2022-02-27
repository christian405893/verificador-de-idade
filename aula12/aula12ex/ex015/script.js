function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // 4 digitos
    var fano = document.getElementById('txtano') //ano q veio no formulario
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[Error] verifique os dados e tente novamente')
    } else {
        var fsex = get.ElementByName('radsex')
        var idade = ano - Number(fano.value)
    }   res.innerHTML = `calculadora de idade: ${idade} ano`
}