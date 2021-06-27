import {BoardProps} from "../../types/types.js";
import {isClear, isOperator} from "../../utils/utils.js";

class BoardImpl {
  private readonly $element: HTMLDivElement;
  private readonly onClick: ({type, value}: { type: string, value: string }) => void;

  constructor({$element, onClick}: BoardProps) {
    this.$element = $element;
    this.onClick = onClick;
    this.addEvent();
  }

  addEvent = () => {
    this.$element.addEventListener('click', ({target}) => {
      if (!(target instanceof HTMLButtonElement)) return;
      const value = target.textContent!;
      if (isOperator(value)) {
        return this.onClick({type: 'Operator', value});
      }
      if (isClear(value)) {
        return this.onClick({type: 'Clear', value});
      }
      return this.onClick({type: 'Number', value});
    })
  }
}

export default BoardImpl;