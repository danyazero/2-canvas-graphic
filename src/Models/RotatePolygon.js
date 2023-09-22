import {VectorByMatrix} from "./Math.js";

export function rotatePolygon(polygon, angle, corner){
    let newPolygon = []
    const radians = angle * (Math.PI / 180)
    console.log(polygon)
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)

    for (let i = 0; i < polygon.length; i++) {
        const x1 = parseInt(polygon[i][0] - polygon[corner*2][0])
        const y1 = parseInt(polygon[i][1] - polygon[corner*2][1])
        newPolygon.push([parseInt((x1*cos - y1 * sin + polygon[corner*2][0])), parseInt((x1 * sin + y1 * cos + polygon[corner*2][1]))])
    }

    return newPolygon
}

// export function rotatePolygon(polygon, angle){
//     let newPolygon = []
//     const radians = angle * (Math.PI / 180)
//     console.log(radians)
//     const cos = Math.cos(radians)
//     const sin = Math.sin(radians)
//     const matrix = [
//         [cos, -sin],
//         [sin, cos]
//     ]
//
//     for (let i = 0; i < polygon.length; i++) {
//         const cords = VectorByMatrix(polygon[i], matrix)
//         newPolygon.push(cords)
//     }
//
//     return newPolygon
// }