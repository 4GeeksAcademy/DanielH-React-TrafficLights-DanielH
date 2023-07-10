import React, {useState} from "react";
import "/workspaces/DanielH-React-TrafficLights-DanielH/src/styles/index.css"

// const [animacion, setAnimacion] = useState(false);



export const Semaforo = () => {

    const [selectColor, setSelectColor] = useState("#FFA500");


    return(
            <div className="container">
                <div className="paloSemaforo"> </div>
                    <div className="cuerpoSemaforo">
                        <div onClick={() => setSelectColor("red")} className={"lightSemaforo1" + (selectColor=== "red" ? " glow " : "" )} ></div>
                        <div  onClick={() => setSelectColor("#FFA500")} className={"lightSemaforo2" + (selectColor=== "#FFA500" ? " glow " : "")}></div>
                        <div onClick={() => setSelectColor("green")} className={"lightSemaforo3" + (selectColor=== "green" ? " glow " : "")}></div>
                    </div>
            </div>
    );
};
