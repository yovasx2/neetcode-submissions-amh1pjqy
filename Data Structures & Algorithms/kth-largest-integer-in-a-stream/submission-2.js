class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._up(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.heap[0];
        const bottom = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = bottom;
            this._down(0);
        }
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _up(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[i] >= this.heap[p]) break;
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }

    _down(i) {
        const len = this.size();
        while (i * 2 + 1 < len) {
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            let best = left;
            if (right < len && this.heap[right] < this.heap[left]) {
                best = right;
            }
            if (this.heap[i] <= this.heap[best]) break;
            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            i = best;
        }
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();
        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.pop();
        }
        return this.minHeap.peek();
    }
}
