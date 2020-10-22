
let num = window.document.getElementById('txtnum') 
let lista = window.document.querySelector('select#flista')
let res1 = window.document.querySelector('div#res1') 
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){ 
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res1.innerHTML = ` `
    } else {
        window.alert('[ERRO] Valor Inválido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicone valores para finalizar!')
    } else {
        let total_v = valores.length
        let maior_v = valores[0] //Math.max(...valores)
        let menor_v = valores[0] //Math.min(...valores)
        let soma_v = 0
        let media_v = 0

        for(let pos in valores){
            soma_v += valores[pos]
            if(valores[pos] > maior_v)
                maior_v = valores[pos]
            if(valores[pos] < menor_v)
            menor_v = valores[pos]   
        }
        media_v = soma_v / total_v

        res1.innerHTML = ` `
        res1.innerHTML += `<p>Ao todo temos ${total_v} valores cadastrados. </p>`
        res1.innerHTML += `<p>O maior valor adicionado foi ${maior_v}</p>`
        res1.innerHTML += `<p>O menor valor adicionado foi ${menor_v}</p>`
        res1.innerHTML += `<p>A soma de todos os valores é ${soma_v} </p>`
        res1.innerHTML += `<p>A média do valores é ${media_v} </p>`
    }
}
