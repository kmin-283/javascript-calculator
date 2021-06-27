import { isClear, isOperator } from "../../utils/utils.js";
class BoardImpl {
    constructor({ $element, onClick }) {
        this.addEvent = () => {
            this.$element.addEventListener('click', ({ target }) => {
                if (!(target instanceof HTMLButtonElement))
                    return;
                const value = target.textContent;
                if (isOperator(value)) {
                    return this.onClick({ type: 'Operator', value });
                }
                if (isClear(value)) {
                    return this.onClick({ type: 'Clear', value });
                }
                return this.onClick({ type: 'Number', value });
            });
        };
        this.$element = $element;
        this.onClick = onClick;
        this.addEvent();
    }
}
export default BoardImpl;
