class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i = 0;                 // Límite para colocar los 0s
        let curr = 0;              // El explorador actual
        let j = nums.length - 1;   // Límite para colocar los 2s

        // FIXED: Debe ser <= para evaluar el último elemento central
        while (curr <= j) {
            if (nums[curr] === 0) {
                // FIXED: Traemos el 0 al frente. Avanzamos ambos porque
                // sabemos con certeza que lo que viene de 'i' es un 1 o el mismo 0.
                [nums[i], nums[curr]] = [nums[curr], nums[i]];
                i++;
                curr++;
            } else if (nums[curr] === 2) {
                // FIXED: Mandamos el 2 al final. NO avanzamos 'curr' porque
                // el elemento que viene de 'j' no ha sido revisado aún.
                [nums[curr], nums[j]] = [nums[j], nums[curr]];
                j--;
            } else {
                // Si es un 1, está en una posición correcta temporal; solo avanzamos.
                curr++;
            }
        }
    }
}
