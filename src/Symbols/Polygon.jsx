import {convertCords, processScale} from "../Models/processScale.js";
import {BrezenLine} from "../Models/BrezenLine.jsx";
import {Circle, Group} from "react-konva";
import {fillPolygon} from "../Models/fillPolygon.js";

export const Polygon = ({polygon, x, y, userScale}) => {
    const scale = processScale(userScale)

    const cordsForFill = fillPolygon(polygon, scale)
    console.log(cordsForFill)

    function renderVectors(polygon){
        let vectors = []
        for (let i = 0; i < polygon.length; i+=2) {
            const start = convertCords(polygon[i][0], polygon[i][1], scale)
            const end = convertCords(polygon[i+1][0], polygon[i+1][1], scale)
            vectors.push(<BrezenLine color={"#FF007F"} key={"point_" + start[0] + "_" + end[0] + "_" + i} points={[...start, ...end]}/>)
        }
        return vectors
    }
    return (
        <>
            <Group x={x} y={y}>
                {cordsForFill.map((element, index) => {
                    return <Circle key={"point_" + index} x={element[0]} y={element[1]} radius={6} fill={"blue"}/>
                })}
                {renderVectors(polygon)}
            </Group>
        </>
    );
}