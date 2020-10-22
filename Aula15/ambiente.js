let num = [10, 0, 42, 20, 57, 11]
num.push(1)
num.sort()
console.log(num)
console.log(`O numero de elementos do meu vetor é ${num.length}`)
console.log(`O primeiro elemento do meu vetor é ${num[0]}`)

let pos = num.indexOf(42)
console.log(`O valor 42 está na posição ${pos}`)

if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`)
}