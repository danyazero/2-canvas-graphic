import {VectorByMatrix} from "./Math.js";

export function processScale(userScale){
    return (1920 / 2) / userScale
}

export function convertCords(x, y, scale){

    const x1 = (x * scale)
    const y1 = (y * scale)

    return [x1, y1]
}

export function scalePolygon(polygon, xScale, yScale){
    let newPolygon = []
    const matrix = [
        [xScale, 0],
        [0, yScale]
    ]

    for (let i = 0; i < polygon.length; i++) {
        const cords = VectorByMatrix(polygon[i], matrix)
        newPolygon.push(cords)
    }
    return newPolygon
}