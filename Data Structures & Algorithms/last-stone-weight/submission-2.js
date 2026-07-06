class MaxHeap {
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
            if (this.heap[i] <= this.heap[p]) break;
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
            if (right < len && this.heap[right] > this.heap[left]) {
                best = right;
            }
            if (this.heap[i] >= this.heap[best]) break;
            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            i = best;
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHeap();
        for (let stone of stones) {
            maxHeap.push(stone);
        }
        console.log(JSON.stringify(maxHeap))
        while (maxHeap.size() > 1) {
            const top1 = maxHeap.pop();
            const top2 = maxHeap.pop();
            const diff = top1 - top2;
            if (diff > 0) {
                maxHeap.push(diff);
            }
        }
        return maxHeap.peek() || 0;
    }
}
