const removeFromArray = function() {
    let args = [...arguments];
    let array = args[0];

    args.shift();

    let result = array.filter((data)=>{
        for(const arg of args){
            if(data === arg){
                return false
            }
        }
        return true;
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
