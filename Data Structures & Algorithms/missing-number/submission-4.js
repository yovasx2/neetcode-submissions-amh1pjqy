class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
    // Suma teórica de 0 a n
    const sumaTeorica = (n * (n + 1)) / 2; 
    
    // Suma real de los elementos del arreglo
    const sumaReal = nums.reduce((acc, curr) => acc + curr, 0);
    
    // La resta nos da el faltante exacto
    return sumaTeorica - sumaReal;
    }
}
