//  Algoritmo para calcular quantas vezes é preciso aplicar a função
// f(N)= 2N, se N é par
// f(N)= 3N + 1, se N é ímpar 
// antes que n seja igual a 1
// Esta é a conjectura de Collatz

function collatz(n){
    var qtd = 0;
    while(n > 1){
        if (n%2 == 0){
            n = n/2;
        }
        else if(n%2 == 1){
            n = 3*n + 1;
        }
        qtd++;
    }
    return qtd;
}

console.log(collatz(1));
console.log(collatz(3));
