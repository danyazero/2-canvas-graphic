import {convertCords, processScale} from "../Components/processScale.js";
import {BrezenLine} from "../Components/BrezenLine.jsx";
import {Group} from "react-konva";

export const MLetter = ({x, y}) => {
    const scale = processScale(20)
    return (
        <Group x={x} y={y}>
            <BrezenLine points={[...convertCords(1, 1.5, scale), ...convertCords(1, 7, scale)]}/>
            <BrezenLine points={[...convertCords(1, 1.5, scale), ...convertCords(1, 7, scale)]}/>
            <BrezenLine points={[...convertCords(0, 7, scale), ...convertCords(1, 7, scale)]}/>
            <BrezenLine points={[...convertCords(0, 0, scale), ...convertCords(0, 7, scale)]}/>
            <BrezenLine points={[...convertCords(0, 0, scale), ...convertCords(1, 0, scale)]}/>
            <BrezenLine points={[...convertCords(1, 0, scale), ...convertCords(3, 2, scale)]}/>
            <BrezenLine points={[...convertCords(3, 2, scale), ...convertCords(5, 0, scale)]}/>
            <BrezenLine points={[...convertCords(5, 0, scale), ...convertCords(6, 0, scale)]}/>
            <BrezenLine points={[...convertCords(6, 0, scale), ...convertCords(6, 7, scale)]}/>
            <BrezenLine points={[...convertCords(5, 7, scale), ...convertCords(6, 7, scale)]}/>
            <BrezenLine points={[...convertCords(5, 1.5, scale), ...convertCords(5, 7, scale)]}/>
            <BrezenLine points={[...convertCords(3, 3.5, scale), ...convertCords(5, 1.5, scale)]}/>
            <BrezenLine points={[...convertCords(1, 1.5, scale), ...convertCords(3, 3.5, scale)]}/>
        </Group>
    );
}