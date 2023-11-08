import dice from "../assets/images/icon-dice.svg"
import "../css/style.css"

function Button(props) {
    console.log(props)

    let elButton = document.getElementById('buttonClick');

    function handleClick() {
        // console.log("hello there")
        props.newAdvice()
    }

    return(
        <>
            <button 
                class = "advice-button"
                id ="buttonClick"
                onClick = {handleClick}>
                <img src = {dice}  alt = "dice icon for button"/>
            </button>
        </>
    )
}

export default Button