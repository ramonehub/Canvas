const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

//Configuração da bola
let bola = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    dx: 2, // Velocidade horizontal
    dy: 2, // Velocidade vertical
    color: "blue",
};

//Função para desenhar a bola
function desenhar(){
    ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.radius, 0, Math.PI * 2);
    ctx.fillStyle = bola.color;
    ctx.fill();
    ctx.closePath();

}

//Função para atualizar a posição da bola
function atualizarPosicaoBola(){
    //Atualizar a posição da bola
    bola.x += bola.dx;
    bola.y += bola.dy;

    //Verificar colisão com as bordas horizontais
    if(bola.x + bola.radius > canvas.width || bola.x - bola.radius < 0){
        bola.dx = -bola.dx; //inverte a direção horizontal
    }

    //Verificar colisão com as bordas verticais
    if(bola.y + bola.radius > canvas.height || bola.y - bola.radius < 0){
        bola.dy = -bola.dy; //Inverte a direção vertical
    }
}

//Função principal de animação
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
    desenhar(); //Desnhar a bola
    atualizarPosicaoBola(); //Atualizar a posição da bola
    requestAnimationFrame(animate); //Requsita o proximo frame
}

//Iniciar a animação
animate();