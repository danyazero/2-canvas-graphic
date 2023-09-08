import {convertCords, processScale} from "../Components/processScale.js";
import {BrezenLine} from "../Components/BrezenLine.jsx";
import {useEffect, useState} from "react";
import {Group, Layer} from "react-konva";

export const OneNumber = ({x, y}) => {
    const scale = processScale(20)

    return (
        <>
            <Group y={y} x={x}>
                <BrezenLine points={[...convertCords(3, 2, scale), ...convertCords(5, 0, scale)]}/>
                <BrezenLine points={[...convertCords(5, 0, scale), ...convertCords(6, 0, scale)]}/>
                <BrezenLine points={[...convertCords(6, 0, scale), ...convertCords(6, 7, scale)]}/>
                <BrezenLine points={[...convertCords(5, 7, scale), ...convertCords(6, 7, scale)]}/>
                <BrezenLine points={[...convertCords(5, 1.5, scale), ...convertCords(5, 7, scale)]}/>
                <BrezenLine points={[...convertCords(4.5, 2, scale), ...convertCords(5, 1.5, scale)]}/>
                <BrezenLine points={[...convertCords(3, 2, scale), ...convertCords(4.5, 2, scale)]}/>
            </Group>
        </>
    );
}