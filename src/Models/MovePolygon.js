export function movePolygon(polygon, x, y){
    let newPolygon = []
    for (let i = 0; i < polygon.length; i++) {
        const newX = polygon[i][0] + parseInt(x/2)
        const newY = polygon[i][1] + parseInt(y/2)
        newPolygon.push([parseInt(newX), parseInt(newY)])
    }
    return newPolygon
}