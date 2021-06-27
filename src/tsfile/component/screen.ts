import {Screen, ScreenProps} from "../../types/types.js";

class ScreenImpl implements Screen {
  private readonly $element: HTMLHeadElement;
  private value: string;

  constructor({$element, value}: ScreenProps) {
    this.$element = $element;
    this.value = value;
  }

  setState = (value: string) => {
    this.value = value;
    this.render();
  }
  render = () => {
    this.$element.textContent = `${this.value}`;
  }
}

export default ScreenImpl;