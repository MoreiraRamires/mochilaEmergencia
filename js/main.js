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


    const existeItem = itensLocalStorage.find(element => element.nome == nome.value)
    const itemAtual = {
        'nome':nomeEvento,
        'quantidade':quantidadeEvento
    }
    
    if ( existeItem){
        itemAtual.id = existeItem.id
        atualizaElemento(itemAtual)
        console.log(itemAtual)


    } else{
        // add novo id 
        itemAtual.id = itensLocalStorage.length;
        criaElemento(itemAtual);
        itensLocalStorage.push(itemAtual)
        console.log(itemAtual)
    }


    localStorage.setItem('itens',JSON.stringify(itensLocalStorage))

    limpaInput();
})

function criaElemento(itemAtual){

   const novoItemLista = document.createElement('li');
            novoItemLista.classList.add('item');
            
            const numeroItemLista = document.createElement('strong')
            numeroItemLista.innerHTML=itemAtual.quantidade;
            numeroItemLista.dataset.id = itemAtual.id
            
            novoItemLista.appendChild(numeroItemLista)
            novoItemLista.innerHTML+=itemAtual.nome;

    const  lista = document.querySelector('[data-lista]');
            
    lista.appendChild(novoItemLista);

    



}
function atualizaElemento(itemAtual){
console.log(  document.querySelector(`[data-id="${itemAtual.id}"]`)
)  


console.log("entrei")

    //pegar a quantidade 
    //somar a quantidade antiga com a nova
    //retornar o valor
}
function limpaInput(){
    inputNome.value="";
    inputQuantidade.value="";
}
