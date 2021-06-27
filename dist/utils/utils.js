const isOperator = (value) => {
    const allowedKey = ['+', '-', '/', 'X', '='];
    return allowedKey.indexOf(value) !== -1;
};
const isClear = (value) => {
    const allowedKey = 'AC';
    return allowedKey === value;
};
const operate = (prev, oper, value) => {
    const num_prev = +prev;
    const num_value = +value;
    switch (oper) {
        case '+':
            return String(num_prev + num_value);
        case '-':
            return String(num_prev - num_value);
        case 'X':
            return String(num_prev * num_value);
        case '/':
            return String(Math.floor(num_prev / num_value));
        default:
            return prev;
    }
};
const calc = (prev, oper, value) => {
    if (prev === '' || oper === '')
        return value;
    return operate(prev, oper, value);
};
export { isOperator, isClear, calc };
