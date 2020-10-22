var agora = new Date() // solicita a data atual da máquina
var hora = agora.getHours() //Insere a hora atual na variavel. Com esse mesmo código é possivel conseguir o mes, ano. data e dia atual!

//var hoje = new Date
//var teste = hoje.getFullYear()

//console.log(teste)
console.log(`Agora são ${hora} hrs.`)

if(hora < 12){
    console.log(`Tenha um bom dia!`)
}   else if(hora > 12 && hora < 18){
        console.log(`Tenha um boa tarde!`)
    }   else{
            console.log(`Tenha uma boa noite!`)
        }