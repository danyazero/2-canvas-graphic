import {Layer, Line, Stage} from "react-konva";

export const Canvas = ({children, scale}) => {

    function renderLines(){
        let lines = []
        const length = 1080 / scale

        for (let i = 0; i < 1080; i += scale) {
            lines.push(<Line fill={"#000"} stroke={"#000"} opacity={4} strokeWidth={2} height={2} points={[0, i*16, 1920, i*16]}/>)
            lines.push(<Line fill={"#000"} stroke={"#000"} opacity={4} strokeWidth={2} height={2} points={[i*16, 0, i*16, 1080]}/>)
        }
        console.log(lines)
        return lines
    }

    return (
        <>
            <Stage width={1920} height={1080}>
                <Layer>
                    {/*{renderLines()}*/}
                    {children}
                </Layer>
            </Stage>
        </>
    )
}