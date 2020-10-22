var agora = new Date() // Solicitando a data atual
var diaSem = agora.getDay() // Recebendo o dia atual da Semana
/*
    Dias da semana conforme o JavaScript
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
console.log(`Hoje é o ${diaSem}º dia da semana.`)

switch(diaSem){//Condição múltipla
    case 0: 
        console.log('Hoje é DOMINGO')
    break

    case 1: 
        console.log('Hoje é SEGUNDA')
    break

    case 2: 
        console.log('Hoje é TERÇA')
    break

    case 3:
        console.log('Hoje é QUARTA')
    break

    case 4:
        console.log('Hoje é QUINTA')
    break

    case 5:
        console.log('Hoje é SEXTA')
    break

    case 6:
        console.log('Hoje é SÁBADO')
    break

    default: 
        console.log('[ERRO] Dia inválido')
    break
}