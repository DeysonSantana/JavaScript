function teste () {
let numero = [1, 7, 5, 12, 3, 51]
let n_maior = 0

for(let i = 0; i < numero.length; i++){
    if(numero[i] > n_maior){
        n_maior = numero[i]
        return `${n_maior}`
    }
}
}
let res = teste()



/*let maior = Math.max(...numero)
let menor = Math.min(...numero)
console.log(maior)
console.log(menor)*/

