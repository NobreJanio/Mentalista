var numeroSecreto = parceInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById('resultado')
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou"
       
    } 
    else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Voce deve digitar um número de 0 a 10";
        

    }

    else {
        elementoResultado.innerHTML = "errou, o número secreto era " + numeroSecreto;
    }
}