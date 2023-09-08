export function processScale(userScale){
    const scale = (window.innerWidth / 2) / userScale
    return scale;
}

export function convertCords(x, y, scale){

    const x1 = (x * scale)
    const y1 = (y * scale)

    return [x1, y1]
}