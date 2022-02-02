function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        img.src = 'manhat.png'
        document.body.style.background = '#e2cd9f'
        
    }else if (hora < 18) {
        img.src = 'tardet.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
       
    }
    
}

