function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO].........VERIFIQUE OS DADOS E TENTE NOVAMENTE!!!')
    } else {
       var fsex = document.getElementsByName('radsex') 
       var idade = ano - Number(fano.value)
       var genero = ' ' //String Vazia
       var img = document.createElement('img') // comando DOM pra criar tag IMG dentro do html pelo JavaScript
       img.setAttribute('id', 'foto') // comando DOM para criar atributos na tag html pelo javaScript

       if(fsex[0].checked) {
           genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianca_M.png') // comando DOM para inserir imagem no html pelo javaScript 
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_M.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto_M.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_M.png')
            }

       } else if(fsex[1].checked){
           genero = 'Mulher'

           if(idade >= 0 && idade < 10){
               //criança
                img.setAttribute('src', 'cianca_F.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_F.png')
            } else if (idade < 50){
                //adulta
                img.setAttribute('src', 'adulta_F.png')
            } else {
                //idosa
                img.setAttribute('src', 'idosa_F.png')
        }
       }
       res.style.textAlign = 'center' //comando DOM que altera as configurações de alinhamento do texto pelo JavaScript
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    } 
        
}