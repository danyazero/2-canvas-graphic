export function VectorByMatrix(vector, matrix) {
    if (vector.length !== 2 || matrix.length !== 2 || matrix[0].length !== 2 || matrix[1].length !== 2) {
        console.error("Неверные размеры вектора или матрицы.");
        return null;
    }

    return [
        parseInt((vector[0] * matrix[0][0] + vector[1] * matrix[1][0])),
        parseInt((vector[0] * matrix[0][1] + vector[1] * matrix[1][1]))
    ];
}