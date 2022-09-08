capitalize = require("../scripts/capitalize.js") 

test('Handles words', ()=>{
    expect(capitalize('odin')).toBe('Odin')
})

test('Handles sentences', ()=>{
    expect(capitalize('may the wrath of the God of Thunder befall them')).toBe('May the wrath of the God of Thunder befall them')
})

test('Handles white spaces', ()=>{
    expect(capitalize(' odin ')).toBe('Odin')
})

test('Handles non-strings values 1', ()=>{
    expect(capitalize([41, 32, 67])).toBeNull()
})

test('Handles non-strings values 2', ()=>{
    expect(capitalize(41)).toBeNull()
})