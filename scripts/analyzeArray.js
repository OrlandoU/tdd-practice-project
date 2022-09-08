module.exports = function(arr){
    if(!Array.isArray(arr) || !arr.length) return null

    let length = arr.length
    let average = arr.reduce((acc, crr)=> {
        if(typeof crr === 'number') return acc + crr
        return acc
    }, 0) / arr.filter(crr=>typeof crr === 'number').length
    let min = Math.min(...arr.filter(crr=>typeof crr === 'number'))
    let max = Math.max(...arr.filter(crr=>typeof crr === 'number'))
    
    return {average, min, max, length}
}