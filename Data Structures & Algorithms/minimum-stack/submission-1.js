class MinStack {
    constructor() {
        this.container = [];
        this.minimum = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.container.push(val);
        val = Math.min(
            val,
            this.minimum.length === 0
                ? val
                : this.minimum[this.minimum.length - 1],
        );
        this.minimum.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.container.pop();
        this.minimum.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.container[this.container.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimum[this.minimum.length-1]
    }
}
