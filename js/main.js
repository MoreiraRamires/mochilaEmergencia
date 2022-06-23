const form = document.querySelector("#novoItem");
const inputQuantidade = document.querySelector("#quantidade");
const inputNome = document.querySelector("#nome");
const itensLocalStorage = JSON.parse(localStorage.getItem("itens"))||[];


itensLocalStorage.forEach(element => {


    criaElemento(element)
});

form.addEventListener("submit",(event)=>{
    const existeItem = itensLocalStorage.find(element => element.nome == nome.value)
    console.log(existeItem)




    event.preventDefault();
   
    
    //pegar o nome e a quantidade 
    event.target.elements
    const nomeEvento = event.target.elements['nome'].value;
    const quantidadeEvento = event.target.elements['quantidade'].value;


    const itemAtual = {
        'nome':nomeEvento,
        'quantidade':quantidadeEvento
    }

    itensLocalStorage.push(itemAtual)

    localStorage.setItem('itens',JSON.stringify(itensLocalStorage))

    criaElemento(itemAtual);
    limpaInput();
})

function criaElemento(itemAtual){

   const novoItemLista = document.createElement('li');
            novoItemLista.classList.add('item');
            
            const numeroItemLista = document.createElement('strong')
            numeroItemLista.innerHTML=itemAtual.quantidade;
            
            novoItemLista.appendChild(numeroItemLista)
            novoItemLista.innerHTML+=itemAtual.nome;

    const  lista = document.querySelector('[data-lista]');
            
    lista.appendChild(novoItemLista);

    



}
function limpaInput(){
    inputNome.value="";
    inputQuantidade.value="";
}
