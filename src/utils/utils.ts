const isOperator = (value: string): boolean => {
  const allowedKey: string[] = ['+', '-', '/', 'X', '='];
  return allowedKey.indexOf(value) !== -1;
}

const isClear = (value: string): boolean => {
  const allowedKey: string = 'AC';
  return allowedKey === value;
}

const operate = (prev: string, oper: string, value: string): string => {
  const num_prev = +prev;
  const num_value = +value;

  switch (oper) {
    case '+':
      return String(num_prev+num_value);
    case '-':
      return String(num_prev-num_value);
    case 'X':
      return String(num_prev*num_value);
    case '/':
      return String(Math.floor(num_prev/num_value));
    case '=':
      return '';
    default:
      return prev;
  }
}

const calc = (prev: string, oper: string, value: string): string => {
  if (prev === '' || oper === '') return value;
  return operate(prev, oper, value);
}

export { isOperator, isClear, calc };