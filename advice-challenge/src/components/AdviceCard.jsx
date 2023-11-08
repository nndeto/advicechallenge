import { useState, useEffect } from "react"
import axios from 'axios';
import '../css/style.css'
import Button from "./Button"

function AdviceCard() {
        const [advice, setAdvice] = useState("There is none")
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
                    <hr class = "advice-linebreak"/>
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