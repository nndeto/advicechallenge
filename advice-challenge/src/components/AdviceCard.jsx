import { useState } from "react"
import axios from 'axios';
import Button from "./Button"
import '../css/style.css'
import hr from "../assets/images/pattern-divider-desktop.svg"
import mhr from "../assets/images/pattern-divider-mobile.svg"

function AdviceCard() {
        const [advice, setAdvice] = useState("There is none. So click the button to get some. (:")
        const [number, setNumber] = useState(0)

        let getAdvice = () => {
            axios
                .get("https://api.adviceslip.com/advice")
                .then((response) => {
                    let adviceSlip = response.data.slip
                    // console.log(response.data.slip.advice)
                    setAdvice(adviceSlip.advice);
                    setNumber(adviceSlip.id)

                })
                .catch((error) => {
                    console.error(error);
                })
        }

    return(
        <>
            <div class = "container">
                <div class = "card">
                    <p class = "advice-header">Advice #{number}</p>
                    <p class = "advice-body">"{advice}"</p>
                    <img class = "advice-linebreak" src ={hr} />
                    <img class = "mobile-linebreak" src = {mhr} />
                    <Button newAdvice = {getAdvice}/>
                    {/* <button 
                        id ="buttonClick"
                        onClick = {handleClick}>
                        <img src = {dice}  alt = "dice icon for button"/>
                    </button> */}
                </div>
            </div>
        </>

    )

}

export default AdviceCard