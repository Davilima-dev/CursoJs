function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.valueOf.length == 0 || fano.valueOf > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        window.alert('Tudo ok!')
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.valueOf)
        res.innerHTML = `Idade calculada: ${idade}`
    }
}