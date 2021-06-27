class ScreenImpl {
    constructor({ $element, value }) {
        this.setState = (value) => {
            this.value = value;
            this.render();
        };
        this.render = () => {
            this.$element.textContent = `${this.value}`;
        };
        this.$element = $element;
        this.value = value;
    }
}
export default ScreenImpl;
