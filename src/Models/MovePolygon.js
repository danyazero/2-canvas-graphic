export function movePolygon(polygon, x, y){
    let newPolygon = []
    for (let i = 0; i < polygon.length; i++) {
        const newX = polygon[i][0] + x
        const newY = polygon[i][1] + y
        newPolygon.push([newX, newY])
    }
    return newPolygon
}