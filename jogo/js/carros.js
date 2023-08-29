// //posições dos carros
// let xCarros= 599;
// let xCarros2= 599;
// let xCarros3= 599;

let xCarros = [700, 700, 700, 700, 700, 700]
let yCarros = [50, 100, 150, 200, 250, 300]
let velocidade = [2, 3.2, 2.6, 3.3, 4.2, 5]


let comprimentoCarros=50;
let alturaCarros=40;

function mostrarCarros() {

    for (let i = 0; i < imagensCarros.length; i++) {
        
        image(imagensCarros[i], xCarros[i], yCarros[i], 55, 40);
    }
}

function movimentoCarro() {
    //-=(diminui de um em um, fazendo o carro andar) e o numero que vem depois é a velocidade que isso acontece

    for (let i = 0; i < imagensCarros.length; i++) {
        
        xCarros[i] -= velocidade[i];

        if (xCarros[i] < -50){
            xCarros[i] = 700
        }
    }
}