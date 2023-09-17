import {convertCords} from "./processScale.js";

function getMaxCords(polygon, scale){
    let maxX = polygon[0][0]
    let maxY = polygon[0][1]

    for (let i = 0; i < polygon.length; i++) {
        if (polygon[i][0] > maxX) maxX = polygon[i][0]
        if (polygon[i][1] > maxY) maxY = polygon[i][1]
    }
    const converted = convertCords(maxX, maxY, scale)

    return {maxX: converted[0], maxY: converted[1]}
}

export function fillPolygon(polygon, scale){
    let cordsForFill = []
    const {maxX, maxY} = getMaxCords(polygon, scale)
    for (let i = 0; i < maxX; i+=12) {
        for (let j = 0; j < maxY; j++) {
            if (isPointInPolygon([i, j], polygon, scale)) cordsForFill.push([i,j])
        }
    }

    return cordsForFill
}

function isPointInPolygon(point, polygon, scale) {
    // Проверка, является ли точка массивом с двумя координатами
    if (!Array.isArray(point) || point.length !== 2) {
        throw new Error("Точка должна быть массивом с двумя координатами [x, y].");
    }

    // Проверка, является ли многоугольник массивом с вершинами (минимум 3 вершины)
    if (!Array.isArray(polygon) || polygon.length < 3) {
        throw new Error("Многоугольник должен быть массивом с минимум 3 вершинами.");
    }

    const x = point[0];
    const y = point[1];
    let inside = false;

    for (let i = 0; i < polygon.length; i += 2) {
        const start = convertCords(polygon[i][0], polygon[i][1], scale)
        const xi = start[0];
        const yi = start[1];
        const j = (i+1) % polygon.length
        const end = convertCords(polygon[j][0], polygon[j][1], scale)
        const xj = end[0];
        const yj = end[1];

        if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
            inside = !inside;
        }
    }

    return inside;
}