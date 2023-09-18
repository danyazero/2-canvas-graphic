import {convertCords, scalePolygon} from "../Models/processScale.js";
import {BrezenLine} from "./BrezenLine.jsx";
import {Circle, Group} from "react-konva";
import {fillPolygon} from "../Models/fillPolygon.js";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {movePolygon} from "../Models/MovePolygon.js";
import {rotatePolygon} from "../Models/RotatePolygon.js";

export const Polygon = ({polygonDefault, x, y, scale, stroke = "#FF007F", fill = "#FF007F", scaleX, scaleY, rotate}) => {
    const [polygonPos, setPolygonPos] = useState({x: x+6, y: y+6})
    const [polygon, setPolygon] = useState(polygonDefault)
    const [delta, setDelta] = useState({x: 0, y: 0})
    const [center, setCenter] = useState({x: 6, y: 6})
    let cordsForFill = fillPolygon(polygon, scale)

    useEffect(() => {
        console.log("move")
        setPolygon(movePolygon(polygon, (delta.x) / scale, (delta.y) / scale))
    }, [delta])

    useEffect(() => {
        console.log("scale")
        setPolygon(scalePolygon(polygon, scaleX, scaleY))
    }, [scaleX, scaleY])

    useEffect(() => {
        console.log("rotate")
        setPolygon(movePolygon(rotatePolygon(polygonDefault, rotate, center.x / scale, center.y/scale), (polygonPos.x) / scale, (polygonPos.y) / scale))
    }, [rotate])

    useEffect(() => {
        console.log(polygon)
        cordsForFill = fillPolygon(polygon, scale)
    }, [polygon])

    console.log("fill")
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
            <Circle fill={fill} stroke={stroke} strokeWidth={3} radius={5} x={center.x} y={center.y} onDragEnd={(event) => setCenter({x: event.target.x(), y: event.target.y()})} draggable={true}/>
            <Group onDragEnd={(event) => {
                setDelta({x: (event.target.x() - polygonPos.x), y: (event.target.y() - polygonPos.y)})
                setPolygonPos({x: event.target.x(), y: event.target.y()})
            }} draggable={true}>
                {cordsForFill.map((element, index) => {
                    return <Circle key={"point_" + index} x={element[0]} y={element[1]} radius={6} fill={fill}/>
                })}
                {renderVectors(polygon)}
            </Group>
        </>
    );
}

Polygon.propTypes = {
    polygonDefault: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    scale: PropTypes.any,
    stroke: PropTypes.string,
    fill: PropTypes.string,
    scaleX: PropTypes.number.isRequired,
    scaleY: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
}