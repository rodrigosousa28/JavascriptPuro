//Construa um algoritmo que, tendo como dados de entrada dois pontos quaisquer no plano, 
//P(x1,y1) e P(x2,y2), escreva a distância entre eles.


function dist(a, b){
    var x1 = a[0];
    var y1 = a[1];
    var x2 = b[0];
    var y2 = b[1];
    var d = ((x2 - x1)**2 + (y2 - y1)**2)**(0.5)
    return d;
}


//Alguns casos de teste
console.log(dist([3, 4], [6, 8]));
console.log(dist([1, 3], [3, 5]));
console.log(dist([-2, 5], [4, -3]));