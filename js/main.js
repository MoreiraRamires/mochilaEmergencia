const form = document.querySelector("#novoItem");
const inputQuantidade = document.querySelector("#quantidade");
const inputNome = document.querySelector("#nome");

console.log(form)

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("funcionou o submit")
    
    //pegar o nome e a quantidade 
    event.target.elements
    const nome = event.target.elements['nome'].value;
    const quantidade = event.target.elements['quantidade'].value;

    criaElemento(nome,quantidade);
    limpaInput();
})

function criaElemento(nome,quantidade){

   const novoItemLista = document.createElement('li');
            novoItemLista.classList.add('item');
            
            const numeroItemLista = document.createElement('strong')
            numeroItemLista.innerHTML=quantidade;
            
            
            novoItemLista.appendChild(numeroItemLista)
            novoItemLista.innerHTML+=nome;

    const  lista = document.querySelector('[data-lista]');
            
    lista.appendChild(novoItemLista)
  


}
function limpaInput(){
    inputNome.value="";
    inputQuantidade.value=0;
}
