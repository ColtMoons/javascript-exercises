const palindromes = function (word) {

    const noPunctuation = word.split('').filter(data =>{
        if(data !== '!' && data !== ',' && data !== '.'&& data !== ' ') return true;

        return false;
    }).join('').toLowerCase();

    const reverseWord = word.split('').reverse()
        .filter(data =>{
            if(data !== '!' && data !== ',' && data !== '.' && data !== ' ') return true;

            return false;
        }).join('').toLowerCase();
    

    return noPunctuation === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
