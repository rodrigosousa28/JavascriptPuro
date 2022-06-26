// Uma Anti Progressão é uma sequência numérica que não contém nenhuma progressão aritmética, ou seja,
// não é possível escolher três elementos x, y, z tais que x < y < z e y - x = z - y
// Esse é um algoritmo de uma Anti Progressão apenas com números inteiros não nulos
// Começando pelo 0, depois colocando o menor inteiro que mantém a sequência uma Anti Progressão.
// Os primeiros termos dessa sequência são: 0, 1, 3...
// Qual é o N-ésimo termo desta sequência?


let ant = [0, 1, 3];
let conterros = 0;
let prox = ant[ant.length-1] + 1;
let cont = 0;
let n = parseInt(prompt(''));

while (cont < n - 3){
    ant.push(prox);
    for(let c = 0; c < ant.length; c++){
        for(let i = 0; i < ant.length; i++){
            if (i != c){
                if((ant[c] < ant[i]) && (ant[i] < prox) && (prox == 2*ant[i] - ant[c])){
                        conterros++;
                }
                else if((ant[c] < prox) && (prox < ant[i]) && (ant[i] == 2*prox - ant[c])){
                        conterros++;
                }
                else if((ant[i] < ant[c]) && (ant[c] < prox) && (prox == 2*ant[c] - ant[i])){
                        conterros++;
                }
                else if((ant[i] < prox) && (prox < ant[c]) && (ant[c] == 2*prox - ant[i])){
                        conterros++;
                }
                else if((prox < ant[i]) && (ant[i] < ant[c]) && (ant[c] == 2*ant[i] - prox)){
                        conterros++;
                }
                else if((prox < ant[c]) && (ant[c] < ant[i]) && (ant[i] == 2*ant[c] - prox)){
                        conterros++;
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