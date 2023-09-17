import {useState} from "react";
import {GithubPicker, HuePicker, SliderPicker} from "react-color";

export const PolygonSettings = ({saveParams, name}) => {
    const [scaleX, setScaleX] = useState(1)
    const [scaleY, setScaleY] = useState(1)
    const [rotate, setRotate] = useState("0")
    const [stroke, setStroke] = useState("#FF007F")
    const [fill, setFill] = useState("#660032")

    function onSubmit(event){
        event.preventDefault()
        saveParams({scaleX, scaleY, stroke, fill, rotate})
    }
    return (
        <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "row", gap: "8px", alignItems: "center"}}>
            <h2>{name}</h2>
            <p>Scale by X</p>
            <select value={scaleX} onChange={(event) => setScaleX(event.target.value)}>
                <option defaultChecked={true} value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
            </select>
            <p>Scale by Y</p>
            <select value={scaleY} onChange={(event) => setScaleY(event.target.value)}>
                <option defaultChecked={true} value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
            </select>
            <p>Rotate</p>
            <input value={rotate} placeholder={"Rotate Polygon"} type={"number"} onChange={(event) => setRotate(event.target.value)}/>
            <GithubPicker triangle={"hide"} width={150} colors={['#DB3E00', '#FCCB00', '#008B02','#1273DE', '#EB9694', "#FF007F"]} onChangeComplete={(color) => setStroke(color.hex)}/>
            <GithubPicker triangle={"hide"} width={150} colors={['#DB3E00', '#FCCB00', '#008B02','#1273DE', '#EB9694', '#660032']} onChangeComplete={(color) => setFill(color.hex)}/>
            <button type={"submit"}>Save</button>
        </form>
    );
}