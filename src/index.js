
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const result = [];
    
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                result.push(...matrix[i]);
            } else {
                result.push(...matrix[i].reverse());
            }
        }
    }

    return result;
};
