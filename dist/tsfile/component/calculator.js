import ScreenImpl from "./screen.js";
import BoardImpl from "./board.js";
import { calc } from "../../utils/utils.js";
class Calculator {
    constructor($element) {
        this.$element = $element;
        this.clear = () => {
            this.value = '';
            this.oper = '';
            this.prev = '';
        };
        this.setState = (value) => {
            this.value = value;
            this.screen.setState(value);
        };
        this.onClick = ({ type, value }) => {
            switch (type) {
                case 'Operator':
                    if (this.operatorPressed)
                        return;
                    this.operatorPressed = true;
                    this.prev = calc(this.prev, this.oper, this.value);
                    this.oper = value;
                    this.screen.setState(this.prev);
                    if (value === '=') {
                        this.operatorPressed = false;
                    }
                    this.value = '0';
                    break;
                case 'Clear':
                    this.clear();
                    this.setState('0');
                    break;
                case 'Number':
                    if (this.oper === '=')
                        this.clear();
                    if (this.value.length === 3)
                        break;
                    let newValue = this.value === '0' ? value : this.value + value;
                    if (!this.operatorPressed) {
                        this.setState(newValue);
                        break;
                    }
                    this.operatorPressed = false;
                    this.setState(value);
                    break;
                default:
                    throw new Error('Operation fail');
            }
        };
        this.value = '0';
        this.prev = '';
        this.oper = '';
        this.operatorPressed = false;
        this.screen = new ScreenImpl({
            $element: this.$element.querySelector('#total'),
            value: this.value
        });
        new BoardImpl({
            $element: this.$element,
            onClick: this.onClick
        });
    }
}
export default Calculator;
