class MyHashSet {
    constructor() {
        this.keys = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.contains(key)) {
            this.keys.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        // FIXED: Used indexOf for straightforward primitive value lookups
        const index = this.keys.indexOf(key);
        if (index !== -1) {
            this.keys.splice(index, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        // FIXED: Used includes() to properly return a true/false boolean
        return this.keys.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
