function verificar() {
    var date = new Date()
    var anoatual = date.getFullYear()
    var anonasc = document.getElementById('anonasc')
    var masc = document.getElementById('masc')
    var fem = document.getElementById('fem')
    var res = document.getElementById('res')
    if (anonasc.value.length == 0 || anonasc.value > anoatual){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var sexo = document.getElementsByName('radsex')
        var idade = anoatual - Number(anonasc.value)
        var genero = ''
        // criando tag img no html pelo javascript
        var img = document.createElement('img')
        // colocando id da tag = 'foto'
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){ //se [0] a primeira bolinha estiver preenchida (.checked)
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //centralizar texto
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // colocar a imagem
        
    }
    
}