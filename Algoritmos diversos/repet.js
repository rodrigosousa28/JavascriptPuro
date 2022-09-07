function repeat(array){
    let aux = [];
    let cont = 0;
    for (let i = 0; i<array.length; i++){
        for(let j = i+1; j<array.length; j++){
            if (array[i] == array[j]){
                cont++;
            }
        }
        if (cont > 0){
            aux.push(array[i]);
        }
        cont = 0;
    }
    console.log(aux);
}