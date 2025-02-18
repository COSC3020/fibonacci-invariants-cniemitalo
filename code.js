function fib(n) {
    var fibonacci = [0]; 
    findFib(n, fibonacci); 
    return fibonacci; 
}

function findFib(n, fibonacci) {
    if (n < 0) { 
        return 0; 
    }

    if (n === 0) { 
        return 0; 
    }

    if (n === 1) {
        fibonacci[1] = 1; 
        return 1; 
    }

    fibonacci[n] = (findFib(n - 1, fibonacci)) + findFib(n - 2, fibonacci);  
    return fibonacci[n]; 
}
