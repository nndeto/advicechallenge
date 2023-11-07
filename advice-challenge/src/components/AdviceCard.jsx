import { useState, useEffect } from "react"
import axios from 'axios';
import '../css/style.css'

function AdviceCard() {
        const [advice, setAdvice] = useState("There is none")

        useEffect(() => {
            axios
                .get("https://api.adviceslip.com/advice")
                .then((response) => {
                    let adviceSlip = response.data.slip
                    // console.log(response.data.slip.advice)
                    setAdvice(adviceSlip.advice);

                })
                .catch((error) => {
                    console.error(error);
                })
        })


    return(
        <>
            <div class = "container">
                <p>{advice}</p>
            </div>
        </>

    )

}

export default AdviceCard