function fib(n) {
    var nums = [0]; 
    findFib(n, nums); 
    return nums; 
}

function findFib(n, nums) {
    if (n < 0) { 
        return 0; 
    }

    if (n === 0) { 
        return 0; 
    }

    if (n === 1) {
        nums[1] = 1; 
        return 1; 
    }

    nums[n] = (findFib(n - 1, nums)) + findFib(n - 2, nums);  
    return nums[n]; 
}
