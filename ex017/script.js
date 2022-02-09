function gerar(){
    var number = document.getElementById('num')
    var num = Number(number.value)
    var res = document.getElementById('res')
    var tab = document.getElementById('seltab')
    var cont = 0
    
    if (number.value.length == 0 | number.value < 0) {
        alert('[ERRO] Verifique o número selecionado!')   
    }else {
        tab.innerHTML = '' //Limpar a área da tabuada 
        while (cont<=10){
            var item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            tab.appendChild(item)
            cont ++
        }
    }
    



}