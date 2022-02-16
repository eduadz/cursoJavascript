let number = document.getElementById('number')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let arr = []

function isNumero(n){
    if (Number(n) >=1 && Number(n)<= 100){
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(number.value) && !inLista(number.value,arr)){ //!inLista número não está na lista 
        let item = document.createElement('option')
        item.text = `Valor ${Number(number.value)} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        arr.push(Number(number.value))
    } else {
        alert('Inválido!')
    }
    // apagar número após digitar 
    number.value = ''
    number.focus()
}

function finalizar() {
    if (arr.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let maior = arr[0]
        let menor = arr[0]
        let soma  = 0
        for (let c in arr){
            soma += arr[c]
            if(arr[c] > maior) {
                maior = arr[c]
            }
            if (arr[c] < menor){
                menor = arr[c]
            }
        }
        let media = soma/arr.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${arr.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informardo foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informardo foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
    
}
    


