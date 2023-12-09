//Função com retorno do saldo de vitórias do jogador,
//Necessário para calcular o rank, com tratamento de erro
function getSaldoDeVitorias(vitorias, derrotas){
    if(vitorias < 0 || derrotas <0){
        console.log("Não se pode ter derrotas ou vitórias negativas")
    }else{
        return vitorias-derrotas
    }
}
//Função com retorno do rank do jogador, com tratamento de erro
function getUserRank(saldo){
    let rank = "na"
    if(saldo != undefined){
        if(saldo <= 10 ){
            rank = "Ferro"
        }else if(saldo <= 20){
            rank = "Bronze"
        }
        else if(saldo <= 50){
            rank = "Prata"
        }else if(saldo <= 80){
            rank = "Ouro"
        }else if(saldo <= 90){
            rank = "Diamante"
        }else if(saldo <= 100){
            rank = "Lendário"
        }else{
            rank = "Imortal"
        }
    }
    return rank; 
}
let vitorias = 111
let derrotas = 10
let saldo = getSaldoDeVitorias(vitorias,derrotas)
let rank = getUserRank(saldo)
console.log(`O Herói tem saldo de ${saldo} e está no nível de ${rank}`)
