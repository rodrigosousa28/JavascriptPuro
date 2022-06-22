function multi(a, b){
    var c = [];
    var d = 0;
    var k = 0;

    // INICIALIZANDO A MATRIZ D (MULTIPLICAÇÃO) COM O TAMANHO EXATO, PARA FACILITAR
    for(let i=0; i<a.length; i++){
        c.push([]);
    }

    for(let r=0; r < c.length; r++){
        while (d < b.length){
          c[r].push(0);
          d++;
        }
        d = 0;
    }
    // A MATRIZ ESTÁ COM O TAMANHO EXATO

    // Usando o conceito do somatório para encontrar cada elemento da matriz resultante
    // da multiplicação de a e b
    for(var i=0; i < a.length; i++){
        for(var j=0; j < b.length; j++){
          while (k < b.length){
            c[i][j] += a[i][k] * b[k][j];
            k++;
          }
          k = 0;
        }
    }
    return c;
}
