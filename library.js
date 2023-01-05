/*

objetivos:

- [X]  Ao clicar sobre um item, ele deve ser marcado como selecionado.
- [X]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado.
- [X]  Ao clicar em um item já marcado, não é necessário desmarcá-lo. Botão de finalizar pedido
- [X]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
- [X]  Quando o usuário tiver selecionado os itens das três categorias, o botão deve mudar para o estado de habilitado.
*/
   //frangos
const prato0 = document.getElementsByClassName('prato')[0]; 
const prato1 = document.getElementsByClassName('prato')[1];
const prato2 = document.getElementsByClassName('prato')[2];
   
let pratoMarcado
let bebidaMarcado
let doceMarcado

let pedidos = ['prato', 'bebida', 'doce']
const btn = document.querySelector('.btn')

prato0.addEventListener('click', () => {
   pratoMarcado = 1
   pedidos[0] = prato0.childNodes[3].innerHTML
   prato0.classList.add('marcado')
   prato1.classList.remove('marcado')
   prato2.classList.remove('marcado')

      if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }
});
prato1.addEventListener('click', () => {
   pratoMarcado = 2
   pedidos[0] = prato1.childNodes[3].innerHTML
   prato1.classList.add('marcado')
   prato2.classList.remove('marcado')
   prato0.classList.remove('marcado')

      if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }

});
prato2.addEventListener('click', () => {
   pratoMarcado = 3
   pedidos[0] = prato2.childNodes[3].innerHTML
   prato2.classList.add('marcado')
   prato0.classList.remove('marcado')
   prato1.classList.remove('marcado')

      if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }
});

   //bebidas
   const bebida0 = document.getElementsByClassName('prato')[3];
   const bebida1 = document.getElementsByClassName('prato')[4];
   const bebida2 = document.getElementsByClassName('prato')[5];
   

bebida0.addEventListener('click', () => {
   bebidaMarcado = 1
   pedidos[1] = bebida0.childNodes[3].innerHTML
   bebida0.classList.add('marcado')
   bebida1.classList.remove('marcado')
   bebida2.classList.remove('marcado')

      if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }
});
bebida1.addEventListener('click', () => {
   bebidaMarcado = 2
   pedidos[1] = bebida1.childNodes[3].innerHTML
   bebida1.classList.add('marcado')
   bebida2.classList.remove('marcado')
   bebida0.classList.remove('marcado')

      if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }

});
bebida2.addEventListener('click', () => {
   bebidaMarcado = 3
   pedidos[1] = bebida2.childNodes[3].innerHTML
   bebida2.classList.add('marcado')
   bebida0.classList.remove('marcado')
   bebida1.classList.remove('marcado')

      if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }
});

   

      //sobremesa
   const doce0 = document.getElementsByClassName('prato')[6];
   const doce1 = document.getElementsByClassName('prato')[7];
   const doce2 = document.getElementsByClassName('prato')[8];

doce0.addEventListener('click', () => {
   doceMarcado = 1
   pedidos[2] = doce0.childNodes[3].innerHTML
   doce0.classList.add('marcado')
   doce1.classList.remove('marcado')
   doce2.classList.remove('marcado')

   if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }

});
doce1.addEventListener('click', () => {
   doceMarcado = 2
   pedidos[2] = doce1.childNodes[3].innerHTML
   doce1.classList.add('marcado')
   doce2.classList.remove('marcado')
   doce0.classList.remove('marcado')

   if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }

});
doce2.addEventListener('click', () => {
   doceMarcado = 3
   pedidos[2] = doce2.childNodes[3].innerHTML
   doce2.classList.add('marcado')
   doce0.classList.remove('marcado')
   doce1.classList.remove('marcado')

   if(pedidos[0] != 'prato' && pedidos[1] != 'bebida' && pedidos[2] != 'doce'){
      btn.classList.add('habilitado')
   }

});   

function entregarPedido(){


   console.log(pedidos)

}