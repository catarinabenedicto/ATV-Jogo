// na função setup definimos as configurações de largura e altura
function setup() {
    
    createCanvas(700, 400);

}

//na função desenho definimos o que será exibido
function draw(params) {
    
    background(130);
    background(imagemDaEstrada);
    // o image permite manipular o objeto no eixo X: da esquerda para a direita e Y: de cima para baixo e também a Largura [W] e Altura [H]
    image(imagemDoMascote, xMascote, yMascote, 40, 40);
    mostrarCarros();
    movimentoCarro();
    movimentoMascote();
    mostrarMascote();
    incluirPontos();
    verificaColisao();
}

 