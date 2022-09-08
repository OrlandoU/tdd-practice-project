reverseString = require('../scripts/reverseString.js')

test('Handles normal Strings', () => {
    expect(reverseString('The Odin Project')).toBe('tcejorP nidO ehT')
})

test('Handles empty Strings', ()=>{
    expect(reverseString('')).toBe('')
})

test('Handles non-strings values 1', ()=>{
    expect(reverseString(41)).toBeNull()
})

test('Handles non-strings values 2', ()=>{
    expect(reverseString([41, 32, 67])).toBeNull()
})