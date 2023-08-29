// posição do Mascote
let xMascote = 70;
let yMascote = 360;
let meusPontos = 0;

let colisao = false;


function verificaColisao() {

    for (let i  = 0; i  < imagensCarros.length; i ++) {

    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xMascote, yMascote, 10)
        if (colisao) {
          zerarPontos();
            if (meusPontos > 0) {
                meusPontos -= 1;
            }
        }

    }
    
    print = ('Colisao acontecendo', colisao);

    
}

function zerarPontos() {
    yMascote = 360
}

function mostrarMascote() {
     image(imagemDoMascote, xMascote, yMascote, 40, 40);
}

function incluirPontos() {

    text(meusPontos, 20, 25)
    fill (color(225, 0, 0))
    textSize(21)

    if(yMascote < 0) {
        yMascote = 360
        meusPontos ++
    }
    
    
}

function movimentoMascote() {

    if (keyIsDown(UP_ARROW)) {
        
        yMascote -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {

        yMascote += 3;
        
    }

    if (keyIsDown(LEFT_ARROW)) {
        
        xMascote -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        
        xMascote += 3;
    }
        
    
}