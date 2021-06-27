type ScreenProps = {
  $element: HTMLHeadElement,
  value: string
};

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Operator = '+' | '-' | '/' | 'X' | '=' | '';
type Clear = 'AC';

interface BoardProps {
  $element: HTMLDivElement,
  onClick: ({type, value}: { type: string, value: string }) => void;
}

interface Screen {
  setState: (value: string) => void;
  render: () => void;
}

interface Board {
  addEvent: () => void;
}

export {ScreenProps, Digit, Operator, Clear, BoardProps, Screen, Board};