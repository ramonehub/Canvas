const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI * 2, false);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(50, 200, 200, 100);
ctx.fillStyle = 'green';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 300); //Primeiro ponto
ctx.lineTo(400, 300); //Segundo ponto
ctx.lineTo(350, 200); //Terceiro ponto
ctx.closePath(); //Fecha o Triangulo
ctx.fillStyle = 'red';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 300); //Primeiro ponto
ctx.lineTo(400, 300); //Segundo ponto
ctx.lineTo(350, 200); //Terceiro ponto
ctx.closePath(); //Fecha o Triangulo
ctx.fillStyle = 'red';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

