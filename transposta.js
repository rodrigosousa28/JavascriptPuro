// Algoritmo para uma função que retorna a matriz transposta


function transp(matriz){
    aux = [];
    transposta = [];
    for(var i = 0; i < matriz[0].length; i++){
      for(var j = 0; j < matriz.length; j++){
        aux.push(matriz[j][i]);
      }
      transposta.push(aux);
      aux = [];
    }
    return transposta;
  }

