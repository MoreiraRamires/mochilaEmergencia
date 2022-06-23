const form = document.querySelector("#novoItem");
const inputQuantidade = document.querySelector("#quantidade");
const inputNome = document.querySelector("#nome");
const itensLocalStorage = JSON.parse(localStorage.getItem("itens"))||[];

console.log(itensLocalStorage)

form.addEventListener("submit",(event)=>{

    event.preventDefault();
    console.log("funcionou o submit")
    
    //pegar o nome e a quantidade 
    event.target.elements
    const nome = event.target.elements['nome'].value;
    const quantidade = event.target.elements['quantidade'].value;


    const itemAtual = {
        'nome':nome,
        'quantidade':quantidade
    }

    itensLocalStorage.push(itemAtual)

    localStorage.setItem('itens',JSON.stringify(itensLocalStorage))

    criaElemento(itemAtual);
    limpaInput();
})

function criaElemento(itemAtual){
    console.log(itemAtual)

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
