import {Circle} from "react-konva";

export const BrezenLine = (props) => {
    let x1 = props.points[0]
    let y1 = props.points[1]
    let x2 = props.points[2]
    let y2 = props.points[3]
    let points = []
    let deltaX = Math.abs(x2 - x1);
    let deltaY = Math.abs(y2 - y1);
    let signX = x1 < x2 ? 1 : -1;
    let signY = y1 < y2 ? 1 : -1;
    //
    let error = deltaX - deltaY;
    //
    points.push(<Circle x={x2} y={y2} radius={3} fill={"green"}/> )
    while (x1 !== x2 || y1 !== y2) {
        points.push(<Circle key={"point_" + props.points[0] + "_" + points.length} x={x1} y={y1} radius={3} fill={"green"}/> )
        let error2 = error * 2;
        //
        if (error2 > -deltaY) {
            error -= deltaY;
            x1 += signX;
        }
        if (error2 < deltaX) {
            error += deltaX;
            y1 += signY;
        }
    }

    return (
        <>
            {points}
        </>
    );
}