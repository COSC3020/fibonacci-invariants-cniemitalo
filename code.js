function fib(n) {
    var array = [0]; 
    findFib(n, array); 
    return array; 
}

function findFib(n, array) {
    if (n < 0) { 
        return 0; 
    }

    if (n === 0) { 
        return 0; 
    }

    if (n === 1) {
        array[1] = 1; 
        return 1; 
    }

    array[n] = (findFib(n - 1, array)) + findFib(n - 2, array);  
    return array[n]; 
}


console.log(fib(7)); 