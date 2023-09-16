import {convertCords, processScale} from "../Models/processScale.js";
import {BrezenLine} from "./BrezenLine.jsx";
import {Circle, Group} from "react-konva";
import {fillPolygon} from "../Models/fillPolygon.js";
import PropTypes from "prop-types";

export const Polygon = ({polygon, x, y, userScale, stroke = "#FF007F", fill = "#FF007F"}) => {
    const scale = processScale(userScale)

    const cordsForFill = fillPolygon(polygon, scale)
    function renderVectors(polygon){
        let vectors = []
        for (let i = 0; i < polygon.length; i+=2) {
            const start = convertCords(polygon[i][0], polygon[i][1], scale)
            const end = convertCords(polygon[i+1][0], polygon[i+1][1], scale)
            vectors.push(<BrezenLine color={stroke} key={"point_" + start[0] + "_" + end[0] + "_" + i} points={[...start, ...end]}/>)
        }
        return vectors
    }
    return (
        <>
            <Group x={x+6} y={y+6}>
                {cordsForFill.map((element, index) => {
                    return <Circle key={"point_" + index} x={element[0]} y={element[1]} radius={6} fill={fill}/>
                })}
                {renderVectors(polygon)}
            </Group>
        </>
    );
}

Polygon.propTypes = {
    polygon: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    userScale: PropTypes.number.isRequired,
    stroke: PropTypes.string,
    fill: PropTypes.string
}