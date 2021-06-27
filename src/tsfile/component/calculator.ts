import ScreenImpl from "./screen.js";
import {Screen, Operator} from "../../types/types.js";
import BoardImpl from "./board.js";
import {calc} from "../../utils/utils.js";

class Calculator {
  private value: string;
  private prev: string;
  private operatorPressed: boolean;
  private oper: Operator;
  private screen: Screen;

  constructor(private $element: HTMLDivElement) {
    this.value = '0';
    this.prev = '';
    this.oper = '';
    this.operatorPressed = false;
    this.screen = new ScreenImpl({
      $element: this.$element.querySelector('#total')!
      , value: this.value
    });
    new BoardImpl({
      $element: this.$element,
      onClick: this.onClick
    });
  }

  setState = (value: string) => {
    this.value = value;
    this.screen.setState(value);
  }

  onClick = ({type, value}: { type: string, value: string }) => {
    switch (type) {
      case 'Operator':
        if (this.operatorPressed) return;
        this.operatorPressed = true;
        console.log(this.prev, this.oper, this.value);
        this.prev = calc(this.prev, this.oper, this.value);
        this.oper = value! as Operator;
        this.screen.setState(this.prev);
        if (value === '=') this.oper = '';
        break
      case 'Clear':
        this.setState('0');
        break
      case 'Number':
        let newValue = this.value === '0' ? value : this.value+value;
        if (!this.operatorPressed) {
          this.setState(newValue);
          break;
        }
        this.operatorPressed = false;
        this.setState(value);
        break
      default:
        throw new Error('Operation fail');
    }
  }
}

export default Calculator;