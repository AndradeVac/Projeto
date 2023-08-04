const formulario = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");


function cadastrar () {
    
    fetch ("http://localhost:8080/login",   //----------------------- //endereço onde vai ser acessado como por exemplo "http://localhost:5500/"
    {



        headers: {     // -------------------->             //Cabeçario onde vai mandar os json o tipo de conteu e o metodo post
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",

        body: JSON.stringify({       //----------->  //Convesor para dados
            email: emailInput.value,
            senha: passwordInput.value
          })
    })
    .then(function (res) {console.log(res)})
    .catch(function (res) {console.log(res)})
}

function limpar () {
    emailInput.value = ""
    passwordInput.value = ""
    
};


formulario.addEventListener('submit', function (event) {
  event.preventDefault();


    cadastrar();
    limpar();

});