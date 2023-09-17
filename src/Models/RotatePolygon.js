import {VectorByMatrix} from "./Math.js";

export function rotatePolygon(polygon, angle){
    let newPolygon = []
    const radians = angle * (Math.PI / 180)
    console.log(radians)
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)
    const matrix = [
        [cos, sin],
        [-sin, cos]
    ]
    // const matrix = [
    //     [1, 0],
    //     [0, -1]
    // ]

    for (let i = 0; i < polygon.length; i++) {
        const cords = VectorByMatrix(polygon[i], matrix)
        newPolygon.push(cords)
    }

    return newPolygon
}