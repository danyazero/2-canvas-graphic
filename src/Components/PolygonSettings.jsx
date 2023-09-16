import {useState} from "react";
import {GithubPicker, HuePicker, SliderPicker} from "react-color";

export const PolygonSettings = ({saveParams, name}) => {
    const [scaleX, setScaleX] = useState("1")
    const [scaleY, setScaleY] = useState("1")
    const [posX, setPosX] = useState('0')
    const [posY, setPosY] = useState('0')
    const [stroke, setStroke] = useState("#FF007F")
    const [fill, setFill] = useState("#660032")

    function onSubmit(event){
        event.preventDefault()
        saveParams({scaleX, scaleY, posX, posY, stroke, fill})
    }
    return (
        <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "row", gap: "8px", alignItems: "center"}}>
            <h2>{name}</h2>
            <p>Scale by X</p>
            <input value={scaleX} placeholder={"Scale by X"} type={"number"} onChange={(event) => setScaleX(event.target.value)}/>
            <p>Scale by Y</p>
            <input value={scaleY} placeholder={"Scale by X"} type={"number"} onChange={(event) => setScaleY(event.target.value)}/>
            <p>Position X</p>
            <input value={posX} placeholder={"Position X"} type={"number"} onChange={(event) => setPosX(event.target.value)}/>
            <p>Position Y</p>
            <input value={posY} placeholder={"Position Y"} type={"number"} onChange={(event) => setPosY(event.target.value)}/>
            <GithubPicker triangle={"hide"} width={150} colors={['#DB3E00', '#FCCB00', '#008B02','#1273DE', '#EB9694', "#FF007F"]} onChangeComplete={(color) => setStroke(color.hex)}/>
            <GithubPicker triangle={"hide"} width={150} colors={['#DB3E00', '#FCCB00', '#008B02','#1273DE', '#EB9694', '#660032']} onChangeComplete={(color) => setFill(color.hex)}/>
            <button type={"submit"}>Save</button>
        </form>
    );
}