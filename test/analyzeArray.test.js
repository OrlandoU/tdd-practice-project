
analyzeArray = require('../scripts/analyzeArray')

test('Handles normal arrays', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1,max: 8,length: 6})
})

test('Handles empty array', ()=>{
    expect(analyzeArray([])).toBeNull()
})

test('Handles invalid values inside array', ()=>{
    expect(analyzeArray([1,null,3,'4',2,6])).toEqual({average: 3, min: 1, max: 6, length: 6})
})
