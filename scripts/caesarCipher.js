module.exports = function cipher(string,n = 0){
    return typeof string === 'string' ? string.split('')
    .map(char => {
        if(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123){
            return String.fromCharCode(((char.charCodeAt(0) - 97 + n) % 26) + 97) 
        }
        else if(char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91){
            return String.fromCharCode(((char.charCodeAt(0) - 65 + n) % 26) + 65)  
        }
        return char
    }).join('') : null;
}