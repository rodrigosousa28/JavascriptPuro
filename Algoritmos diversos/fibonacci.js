// Função que dá os n primeiros termos da sequência de Fibonacci

function fib(n){
    var anterior = 0;
    var atual = 1;
    if (n == 0){
        return undefined;
    }
    if (n == 1){
        return anterior;
    }
    var proximo;
    var seq = [anterior, atual];
    for(var i=1; i<=n - 2; i++){
        proximo = anterior + atual;
        seq.push(proximo);
        anterior = atual;
        atual = proximo;
    }
    return seq;
}