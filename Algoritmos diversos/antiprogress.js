// Uma Anti Progressão é uma sequência numérica que não contém nenhuma progressão aritmética, ou seja,
// não é possível escolher três elementos x, y, z tais que x < y < z e y - x = z - y
// Esse é um algoritmo de uma Anti Progressão apenas com números inteiros não nulos
// Começando pelo 0, depois colocando o menor inteiro que mantém a sequência uma Anti Progressão.
// Os primeiros termos dessa sequência são: 0, 1, 3...
// Qual é o N-ésimo termo desta sequência?


var ant = [0, 1, 3];
var conterros = 0;
var prox = ant[ant.length-1] + 1;
var cont = 0;
var n = parseInt(prompt(''));

while (cont < n - 3){
    ant.push(prox);
    for(let c = 0; c < ant.length; c++){
        for(let i = 0; i < ant.length; i++){
            for(let j = 0; j < ant.length; j++){
                if ((i != j) && (i != c) && (c != j)){
                    if((ant[c] < ant[i]) && (ant[i] < ant[j]) && (ant[j] == 2*ant[i] - ant[c])){
                        conterros++;
                    }
                    else if((ant[c] < ant[j]) && (ant[j] < ant[i]) && (ant[i] == 2*ant[j] - ant[c])){
                        conterros++;
                    }
                    else if((ant[i] < ant[j]) && (ant[j] < ant[c]) && (ant[c] == 2*ant[j] - ant[i])){
                        conterros++;
                    }
                    else if((ant[i] < ant[c]) && (ant[c] < ant[j]) && (ant[j] == 2*ant[c] - ant[i])){
                        conterros++;
                    }
                    else if((ant[j] < ant[i]) && (ant[i] < ant[c]) && (ant[c] == 2*ant[i] - ant[j])){
                        conterros++;
                    }
                    else if((ant[j] < ant[c]) && (ant[c] < ant[j]) && (ant[j] == 2*ant[c] - ant[j])){
                        conterros++;
                    }
                }
            }
        }
    }
    if(conterros > 0){
        ant.pop(prox);
        conterros = 0;
    }else{
        cont++;
    }
    prox++;
}

console.log(ant[n-1]);
