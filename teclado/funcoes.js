const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

// Configuração do quadrado
let square = {
    x: 200,
    y: 200,
    size: 50,
    color: "blue",
    speed: 50 // Velocidade do movimento
};

function drawSquare() {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size); // Desenha o quadrado
    ctx.closePath();
}

function moveSquare(event) {
    const key = event.key;

    if (key === "ArrowUp" && square.y > 0) {
        square.y -= square.speed; // Move para cima
    } else if (key === "ArrowDown" && square.y + square.size < canvas.height) {
        square.y += square.speed; // Move para baixo
    } else if (key === "ArrowLeft" && square.x > 0) {
        square.x -= square.speed; // Move para a esquerda
    } else if (key === "ArrowRight" && square.x + square.size < canvas.width) {
        square.x += square.speed; // Move para a direita
    }

    drawSquare(); // Atualiza o desenho
}

window.addEventListener('keydown', moveSquare);
drawSquare();
