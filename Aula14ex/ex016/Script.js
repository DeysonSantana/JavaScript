function contar() {
    var inc = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    

    if (inc.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossivel contar!'
    } else{
        res.innerHTML = 'Contando: <br/>'
        let i = Number(inc.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            window.alert('Passo Inválido. Considerando passo 1')
            p = 1
        }
        
        if (i < f){         
            //contagem crescente  
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            //contagem regressiva
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    } res.innerHTML += `\u{1F3C1}`  
}
   