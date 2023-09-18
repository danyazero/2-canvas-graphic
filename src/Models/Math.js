export function VectorByMatrix(vector, matrix) {
    if (vector.length !== 2 || matrix.length !== 2 || matrix[0].length !== 2 || matrix[1].length !== 2) {
        console.error("Неверные размеры вектора или матрицы.");
        return null;
    }

    return [
        ((vector[0] * matrix[0][0] + vector[1] * matrix[1][0])),
        ((vector[0] * matrix[0][1] + vector[1] * matrix[1][1]))
    ];
}

export function multiplyMatrix(matrix1, matrix2) {
    if (matrix1.length !== 3 || matrix2.length !== 3) {
        throw new Error("Матрицы должны иметь правильные размеры (1x3 и 3x3) для умножения.");
    }

    const resultMatrix = [0, 0, 0];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            resultMatrix[i] += matrix1[j] * matrix2[j][i];
        }
    }

    return resultMatrix;
}