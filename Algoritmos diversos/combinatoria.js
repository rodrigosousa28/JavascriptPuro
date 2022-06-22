// Um algoritmo para ler 2 inteiros positivos e calcular a combinação e o arranjo dos dois

function fact(n){
    fatorial = 1;
    if (n == 0){
      return fatorial;
    }
    else{
      for(var i = 1; i <= n; i++){
      fatorial *= i;
      }
    }
    return fatorial;
}
  
// Função para calcular a combinação de a e b 
function comb(a, b){
    c = fact(a)/(fact(b)*fact(a-b));
    return c;
}

// Função para calcular o arranjo de a e b
function arr(a, b){
    a = fact(a)/fact(a-b);
    return a;
}
