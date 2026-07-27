class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const operators =["+", "-", "*", "/"];
        const toProcess =[];
        for(let token of tokens){
            if(!operators.includes(token)){
                toProcess.push(token)
            } else {
                const second = parseInt(toProcess.pop());
                const first = parseInt(toProcess.pop());
                let res;
                switch(token){
                    case('+'): 
                    res = first + second;
                    break;
                    case('-'):
                    res = first - second;
                    break;
                    case('*'):
                    res = first * second;
                    break;
                    case('/'):
                    res = Math.trunc(first / second);
                    break;
                }
                toProcess.push(res);
            }
            console.log(toProcess)
        }
        return toProcess.pop()
    }
}
