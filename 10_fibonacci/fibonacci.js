const fibonacci = function(position) {
    if(+position < 0) return 'OOPS'
    if(+position == 0) return 0;
    if(+position == 1) return 1;
    
    let first = 0;
    let second = 1;
    let result = 0;
    for(let i = 2; i <= +position; i ++){
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
