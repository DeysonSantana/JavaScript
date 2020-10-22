function carregar () {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 11
    //msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {

        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'fotomanha.png'
        document.body.style.background = '#cac0be'

    } else if(hora >= 12 && hora <= 18) {

        msg.innerHTML = `Boa Tarde! Agora são ${hora} horas.`
        img.src = 'fototarde.png'
        document.body.style.background = '#c68152'

    } else {

        msg.innerHTML = `Boa Noite! Agora são ${hora} horas.`
        img.src = 'fotonoite.png'
        document.body.style.background = '#182e4a'
    }
}