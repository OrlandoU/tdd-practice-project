module.exports = (()=>{
    let add = (num1, num2) => {
        return typeof num1 === 'number' && typeof num2 === 'number' ? num1 + num2 : null;
    }
    let subtract = (num1, num2) => {
        return typeof num1 === 'number' && typeof num2 === 'number' ? num1 - num2 : null;
    }
    let divide = (num1, num2) => {
        return typeof num1 === 'number' && typeof num2 === 'number' ? num1 / num2 : null;
    }
    let multiply = (num1, num2) => {
        return typeof num1 === 'number' && typeof num2 === 'number' ? num1 * num2 : null;
    }

    return {add, subtract, divide, multiply}
})()