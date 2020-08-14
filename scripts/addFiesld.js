//procura o botao addTime

document.querySelector("#addTime")
.addEventListener('click',duplicateField)


function duplicateField(){
    //duplica campos dos horarios
    const newFieldContainer = document.querySelector('.scalaItem').cloneNode(true)

    //pega os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    //limpa os campos 
    fields.forEach(function(field){
        field.value = ""
    })

    //coloca os campos na pagina
    document.querySelector("#scalas").appendChild(newFieldContainer)

}