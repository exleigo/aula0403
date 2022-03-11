//1+2+n.....
const calculoDemorado = (n) => {
    let p = new Promise ((resolve,reject) => {
     if(n < 0 )
     reject('numeros não use numeros negativos')
     else {
         let res = 0
         for
     }
    }
       
}



//function devolveUm(){
//    let p = new Promise(function,resolve,reject) ==>{
//
//    })
 //   return p
//}
//const resultado = devovlveUM
//resultado.Then((res)) => console.log(res)
//}
//function devolveUM(){
//    return1
//}



//callcback hell




//const fs = require('fs')
//const abrirArquivo = function (nomeArquivo){
//    const exibirConteudo = function (erro,conteudo){
 //       if (erro){
 //           console.log ('Erro: '+ erro)
        }
        else{
            console.log ("ok," + conteudo.toString())
            const dobro = +conteudo.toString() * 2
            console.log ("valor calculado: " + dobro)
            const finalizar = function(erro){
                if (erro)
                console.log ("erro" + erro)
                else
                console.log ("ok, escreveu")

            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        }
    }
//segundo parametro: função Callback
    fs.readFile ('arquivo.txt', exibirConteudo);
}
