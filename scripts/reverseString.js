module.exports = function reverseString(string){
    return typeof string === 'string'? string.split('').reverse().join(''): null;
}