export function processScale(userScale){
    return (window.innerWidth / 2) / userScale
}

export function convertCords(x, y, scale){

    const x1 = (x * scale)
    const y1 = (y * scale)

    return [x1, y1]
}

export function scalePolygon(polygon, xScale, yScale){
    let newPolygon = []
    const matrix = [
        [xScale / 2, 0],
        [0, yScale / 2]
    ]

    for (let i = 0; i < polygon.length; i++) {
        const cords = matVectorByMatrix(polygon[i], matrix)
        console.log(cords)
        newPolygon.push(cords)
    }

    return newPolygon
}

function matVectorByMatrix(vector, matrix) {
    if (vector.length !== 2 || matrix.length !== 2 || matrix[0].length !== 2 || matrix[1].length !== 2) {
        console.error("Неверные размеры вектора или матрицы.");
        return null;
    }

    return [
        vector[0] * matrix[0][0] + vector[1] * matrix[1][0],
        vector[0] * matrix[0][1] + vector[1] * matrix[1][1]
    ];
}