/*

objetivos:

- [X]  Ao clicar sobre um item, ele deve ser marcado como selecionado.
- [ ]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado.
- [ ]  Ao clicar em um item já marcado, não é necessário desmarcá-lo. Botão de finalizar pedido
- [ ]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
- [ ]  Quando o usuário tiver selecionado os itens das três categorias, o botão deve mudar para o estado de habilitado.
*/
   //frangos
let prato0 = document.getElementsByClassName('prato')[0]; 
let prato1 = document.getElementsByClassName('prato')[1];
let prato2 = document.getElementsByClassName('prato')[2];
   
let pratoMarcado

prato0.addEventListener('click', () => {
   pratoMarcado = 1
   prato0.classList.toggle('marcado')
   prato1.classList.remove('marcado')
   prato2.classList.remove('marcado')
});
prato1.addEventListener('click', () => {
   pratoMarcado = 2
   prato1.classList.toggle('marcado')
   prato2.classList.remove('marcado')
   prato0.classList.remove('marcado')

});
prato2.addEventListener('click', () => {
   pratoMarcado = 3
   prato2.classList.toggle('marcado')
   prato0.classList.remove('marcado')
   prato1.classList.remove('marcado')
});

   //bebidas
   let bebida0 = document.getElementsByClassName('prato')[3];
   let bebida1 = document.getElementsByClassName('prato')[4];
   let bebida2 = document.getElementsByClassName('prato')[5];
   
   let bebidaMarcado

bebida0.addEventListener('click', () => {
   bebidaMarcado = 1
   bebida0.classList.toggle('marcado')
   bebida1.classList.remove('marcado')
   bebida2.classList.remove('marcado')
});
bebida1.addEventListener('click', () => {
   bebidaMarcado = 2
   bebida1.classList.toggle('marcado')
   bebida2.classList.remove('marcado')
   bebida0.classList.remove('marcado')

});
bebida2.addEventListener('click', () => {
   bebidaMarcado = 3
   bebida2.classList.toggle('marcado')
   bebida0.classList.remove('marcado')
   bebida1.classList.remove('marcado')
});

   

      //sobremesa
   let doce0 = document.getElementsByClassName('prato')[6];
   let doce1 = document.getElementsByClassName('prato')[7];
   let doce2 = document.getElementsByClassName('prato')[8];

   let doceMarcado

doce0.addEventListener('click', () => {
   doceMarcado = 1
   doce0.classList.toggle('marcado')
   doce1.classList.remove('marcado')
   doce2.classList.remove('marcado')
});
doce1.addEventListener('click', () => {
   doceMarcado = 2
   doce1.classList.toggle('marcado')
   doce2.classList.remove('marcado')
   doce0.classList.remove('marcado')

});
doce2.addEventListener('click', () => {
   doceMarcado = 3
   doce2.classList.toggle('marcado')
   doce0.classList.remove('marcado')
   doce1.classList.remove('marcado')
});   