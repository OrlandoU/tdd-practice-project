cipher = require('../scripts/caesarCipher')

test('Shift chars by 1 place', ()=>{
    expect(cipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('Shift chars by 23 place', ()=>{
    expect(cipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 23)).toBe('XYZABCDEFGHIJKLMNOPQRSTUVW')
})

test('Handles non-strings values', ()=>{
    expect(cipher(null, 23)).toBeNull()
})

test('Handles empty Strings', ()=>{
    expect(cipher('')).toBe('')
})
