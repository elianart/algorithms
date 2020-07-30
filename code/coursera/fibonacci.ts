export function fibonacci(n){
    if(n === 0 || n === 1){
        return n;
    }

    var array = [0, 1];
    for(let i = 2; i < n ; i++){
        array[i] = array[i-1] + array[i-2];
    }

    return array[n-1] + array[n-2];
}

