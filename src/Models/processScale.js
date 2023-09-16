export function processScale(userScale){
    return (window.innerWidth / 2) / userScale
}

export function convertCords(x, y, scale){

    const x1 = (x * scale)
    const y1 = (y * scale)

    return [x1, y1]
}