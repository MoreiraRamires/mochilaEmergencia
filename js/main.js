const form = document.querySelector("#novoItem");
const inputQuantidade = document.querySelector("#quantidade");
const inputNome = document.querySelector("#nome");
const itensLocalStorage = JSON.parse(localStorage.getItem("itens"))||[];



itensLocalStorage.forEach(element => {

    criaElemento(element)
});

form.addEventListener("submit",(event)=>{
    event.preventDefault();
   
    //pegar o nome e a quantidade 
    const nomeEvento = event.target.elements['nome'].value;
    const quantidadeEvento = event.target.elements['quantidade'].value;


    const existeItem = itensLocalStorage.find(element => element.nome.toUpperCase() === nome.value.toUpperCase() )
    const itemAtual = {
        'nome':nomeEvento,
        'quantidade':quantidadeEvento
    }
    
    if ( existeItem){
        itemAtual.id = existeItem.id
        atualizaElemento(itemAtual)
       

        itensLocalStorage[itensLocalStorage.findIndex(element => element.id === existeItem.id)] = itemAtual
    } else{
        // add novo id 
      
        itemAtual.id = itensLocalStorage[itensLocalStorage.length -1] ? (itensLocalStorage[itensLocalStorage.length-1]).id + 1 : 0;

        criaElemento(itemAtual);
        itensLocalStorage.push(itemAtual)
       
    }


    // localStorage.setItem('itens',JSON.stringify(itensLocalStorage))
    escreveLocalStorage();

    limpaInput();
})

function criaElemento(itemAtual){

   const novoItemLista = document.createElement('li');
            novoItemLista.classList.add('item');
            
            const numeroItemLista = document.createElement('strong')
            numeroItemLista.innerHTML=itemAtual.quantidade;
            numeroItemLista.dataset.id = itemAtual.id
            
            novoItemLista.appendChild(numeroItemLista)
            novoItemLista.innerHTML+=itemAtual.nome.toUpperCase();
            novoItemLista.appendChild(deletaBotao(itemAtual.id))

    const  lista = document.querySelector('[data-lista]');
            
    lista.appendChild(novoItemLista);

}
function atualizaElemento(itemAtual){
 document.querySelector(`[data-id="${itemAtual.id}"]`).innerHTML = itemAtual.quantidade
}
function limpaInput(){
    inputNome.value="";
    inputQuantidade.value="";
}

function deletaBotao(id){
    const elementoBotao = document.createElement('button');
    elementoBotao.innerHTML='X'

    elementoBotao.addEventListener('click',function (){
        deletaElemento(this.parentElement,id)
    })

    return elementoBotao
}

function deletaElemento(tag,id){
    tag.remove()
    console.log(id)

    //remover item do array 
    itensLocalStorage.splice(itensLocalStorage.findIndex(element => element.id === id),1)
    escreveLocalStorage()
}

function escreveLocalStorage(){
    localStorage.setItem('itens',JSON.stringify(itensLocalStorage).toLocaleLowerCase())
}
