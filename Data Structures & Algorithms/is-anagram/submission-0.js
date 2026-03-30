class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     isAnagram(s, t) {
    // Si las longitudes difieren, no pueden ser anagramas
    if (s.length !== t.length) return false;

    // Contadores de caracteres
    const countS = {};
    const countT = {};

    // Contar ocurrencias en s y en t
    for (let i = 0; i < s.length; i++) {
      const chS = s[i];
      const chT = t[i];

      countS[chS] = (countS[chS] || 0) + 1;
      countT[chT] = (countT[chT] || 0) + 1;
    }

    // Comparar ambos hashes
    for (const ch in countS) {
      if (countS[ch] !== countT[ch]) return false;
    }
    return true

}
}