class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (let c of s) {
            if (c === "(" || c === "[" || c === "{") {
                stack.push(c);
            } else {
                if (c === ")"){
                    const p = stack.pop();
                    if (p !== '('){
                        return false;
                    }
                }
                if (c === "}"){
                    const p = stack.pop();
                    if (p !== '{'){
                        return false;
                    }
                }
                if (c === "]"){
                    const p = stack.pop();
                    if (p !== '['){
                        return false;
                    }
                }
            }
        }
        if (stack.length === 0){
            return true;
        } else {
            return false;
        }
    }
}
