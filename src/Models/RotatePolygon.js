import {VectorByMatrix} from "./Math.js";

export function rotatePolygon(polygon, angle, x, y){
    let newPolygon = []
    const radians = angle * (Math.PI / 180)
    console.log(radians)
    console.log({x0: x, y0: y})
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)
    const matrix = [
        [cos, -sin],
        [sin, cos]
    ]

    for (let i = 0; i < polygon.length; i++) {
        const x1 = polygon[i][0] - polygon[0][0]
        const y1 = polygon[i][1] - polygon[0][1]
        newPolygon.push([(x1*cos - y1 * sin + x), (x1 * sin + y1 * cos + y)])
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