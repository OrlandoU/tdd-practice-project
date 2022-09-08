calculator = require('../scripts/calculator')

test('Handles sum', ()=>{
    expect(calculator.add(2, 5)).toBe(7)
})

test('Handles subtraction', ()=>{
    expect(calculator.subtract(7, 5)).toBe(2)
})

test('Handles division', ()=>{
    expect(calculator.divide(10, 2)).toBe(5)
})

test('Handles multiplication', ()=>{
    expect(calculator.multiply(2, 5)).toBe(10)
})

test('Handles non-numerical values: Sum', ()=>{
    expect(calculator.add('2', 5)).toBeNull()
})

test('Handles non-numerical values: Subtraction', ()=>{
    expect(calculator.subtract('7', 5)).toBeNull()
})

test('Handles non-numerical values: Division', ()=>{
    expect(calculator.divide('10', 2)).toBeNull()
})

test('Handles non-numerical values: Multiplication', ()=>{
    expect(calculator.multiply('2', 5)).toBeNull()
})

