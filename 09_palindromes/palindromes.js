const palindromes = function (str) {
    let temp = str.toLowerCase();
    str = temp;
    
    const len = str.length;
    let endOfString = len - 1;
    //Stringin sondan ve başından bakmaya başla
    for(let i = 0; i < len; i++) {
        if(i === endOfString) break;
        if(!(str[endOfString].charCodeAt() >= 97 && str[endOfString].charCodeAt() <= 122)) {
            while (!(str[endOfString].charCodeAt() >= 97 && str[endOfString].charCodeAt() <= 122)) {
                endOfString--;
                if(str[endOfString].charCodeAt() >= 97 && str[endOfString].charCodeAt() <= 122) break;
            }
        }
        if(!(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122)) {
            while (!(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122)) {
                i++;
                if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122 ) break;
            }
        }
        if(str[i] !== str[endOfString]) return false;
        if(i === endOfString) break;
        endOfString--;
    }
    return true;
    //Büyük varsa küçüğe çevir
    //Boşluk veya noktamala işaretlerini pas geç
};

// Do not edit below this line
module.exports = palindromes;
