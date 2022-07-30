const repeatString = function(string, number) {
    var answer = "";
    if(number >= 0){
        for(let i = 0; i < number;i++){
            answer+=string;
        }
        return answer;
    }else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
