const sumAll = function(a, b) {
    if(typeof(a) === "number" && typeof(b) === "number" && a >= 0 && b >= 0){
        let sum = 0;
        let max = a > b ? a : b
        let min = a < b ? a : b
        
        for(let i = min; i <= max; i++){
            sum  += i
        }
        return sum;
    }else{
        return "ERROR"
    }
}

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
