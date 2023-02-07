import React from "react"

import {useCssHandles} from "vtex.css-handles";

const ButtonGroup=()=>{
const CSS_HANDLES=["button__group","button__group__section2"]
const handles=useCssHandles(CSS_HANDLES)
    return (
        <div className={handles.button__group}>
      
        <div  className={handles.button__group__section2}>
            <a href="/">Ir a mi carrito</a>
            <button>Seguir comprando</button>
        </div>
        </div>
    )
}
export default ButtonGroup