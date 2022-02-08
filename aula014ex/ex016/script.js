function contar(){
    var inicio = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var cont = document.getElementById('cont')
    var res = document.getElementById('res')

    if (inicio.value =='' | fim.value == '' | cont.value == '' ){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        i = Number(inicio.value)
        f = Number(fim.value)
        cont = Number(cont.value)
        
        res.innerHTML = 'Contando:'
        for(var c = i; c <= f; c += cont){
            res.innerText += ` ${c} ->`
        }
        res.innerText += ' Fim'
    }
}