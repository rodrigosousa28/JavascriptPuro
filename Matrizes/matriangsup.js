//Algoritmo para uma funçao que receba uma matriz quadrada m
//e que retorne true se e somente se m for uma matriz triangular superior, isto é, se todos os
//elementos abaixo da diagonal principal forem zero

function tri(m){
    var conterros = 0;
    for (let i=0; i < m.length; i++){
        for(let j=0; j<m.length; j++){
            // testando se os valores abaixo da diagonal são nulos
            if (i > j){
                if(m[i][j] != 0){
                    conterros++;
                }
            }
            // testando se os valores acima da diagonal são não nulos
            else if(j >= i){
                if(m[i][j] == 0){
                    conterros++;
                }
            }
        }
    }
    if(conterros == 0){
        return true;
    }
    else{
        return false;
    }
}

