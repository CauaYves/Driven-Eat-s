const btn = document.querySelector('.btn')
const tela = document.querySelector('#confirmacao-pedido')

let itens = []
let conta = []
let soma

let nome
let local


function desmarcarPrato(classe){
   const pratoAnt = document.querySelector(`${classe} .marcado`)
   if(pratoAnt !== null){
      pratoAnt.classList.remove('marcado')
   }
}

function concluirPedido(){
   soma = conta.reduce(
      (acc, val) => acc + val, 0
   )
   if(itens[0] != null  && itens[1] != null && itens[2] != null){
      btn.removeAttribute('disabled')
      btn.classList.add('habilitado')
   }
}

function selecPrato(prato) {
   desmarcarPrato('.comidas')
   valorPrato = Number(prato.childNodes[7].innerText.replace('R$', ''))
   nomePrato = prato.childNodes[3].innerText
   prato.classList.add('marcado')

   itens[0] = nomePrato
   conta[0] = valorPrato

   concluirPedido()
}

function mostrarTela(){
   tela.style.display = 'block'
}

function selecBebida(bebida){
   desmarcarPrato('.bebidas')
   valorBebida = Number(bebida.childNodes[7].innerText.replace('R$', ''))
   nomeBebida = bebida.childNodes[3].innerText
   bebida.classList.add('marcado')

   itens[1] = nomeBebida
   conta[1] = valorBebida

   concluirPedido()
}

function selecDoce(doce){
   desmarcarPrato('.doces')
   valorDoce = Number(doce.childNodes[7].innerText.replace('R$', ''))
   nomeDoce = doce.childNodes[3].innerText
   doce.classList.add('marcado')

   itens[2] = nomeDoce
   conta[2] = valorDoce
   concluirPedido()
}
let ConfPrat = document.querySelectorAll('.textConfirm')[0].childNodes[1]
let ConfValPrat = document.querySelectorAll('.textConfirm')[0].childNodes[3]

let ConfBebi = document.querySelectorAll('.textConfirm')[1].childNodes[1]
let ConfValBebi = document.querySelectorAll('.textConfirm')[1].childNodes[3]

let ConfDoce = document.querySelectorAll('.textConfirm')[2].childNodes[1]
let ConfValDoce = document.querySelectorAll('.textConfirm')[2].childNodes[3]

let total = document.querySelectorAll('.textConfirm')[3].childNodes[3]

function finalizar(){//botao de confirmação

   ConfPrat.innerText = itens[0]
   ConfBebi.innerText = itens[1]
   ConfDoce.innerText = itens[2]

   ConfValPrat.innerText = conta[0]
   ConfValBebi.innerText = conta[1]
   ConfValDoce.innerText = conta[2]

   total.innerText = soma.toFixed(2)

   nome = prompt('Qual seu nome?')
   local = prompt(`Ola ${nome} digite seu Endereço abaixo`)

   mostrarTela()
}
function esconderTela() {
   tela.style.display = 'none'
}
function enviarWhats(){
   window.open(`https://wa.me/5524999999999?text=Ol%C3%A1,%20gostaria%20de%20fazer%20o%20pedido:%0A-%20Prato:%20${itens[0]}%0A-%20Bebida:%20${itens[1]}%0A-%20Sobremesa:%20${itens[2]}%0ATotal:%20R$%20${soma}%0A%0ANome:%20${nome}%0AEndere%C3%A7o:%20${local}`)
}
