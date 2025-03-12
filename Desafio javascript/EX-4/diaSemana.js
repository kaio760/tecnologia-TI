function mostrarDia(){
    const data = new Date();
    const dia = data.getDay()

    let nomeDia;

    switch (dia){
        case 0:
            nomeDia = "Domingo";
            break;

        case 1:
            nomeDia = "Segunda";
            break

        case 2:
            nomeDia = "Terça";
            break;

        case 3:
            nomeDia = "Quarta";
            break;
        
        case 4:
            nomeDia = "Quinta";
            break;

        case 5:
            nomeDia = "Sexta";
            break;

        case 6:
            nomeDia = "Sabado";
            break;
    }
    document.getElementById("resultado").innerHTML = `Hoje é ${nomeDia} (numero ${dia})`;
}