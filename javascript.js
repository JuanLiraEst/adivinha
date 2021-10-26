var random= (Math.floor(Math.random()*100))

function numero_rand() {
    let chute = parseFloat(document.getElementById("numero").value);

    if(chute<random){
        document.getElementById("texto").innerHTML=(chute+" é menor que o número");
        document.getElementById("div").style.setProperty("background-color","red");
    }
    else if (chute > random) {
        document.getElementById("texto").innerHTML=(chute+" é maior que o número");
        document.getElementById("div").style.setProperty("background-color","blue");
        }
    else if (chute == random) {
        document.getElementById("texto").innerHTML=(chute+": Acertou! ");
        document.getElementById("div").style.setProperty("background-color","green");
    }}


