import React from "react"
import {useProduct} from "vtex.product-context"
import {useOrderForm} from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"

const AddToCartInfo=({blockClass}:{blockClass:string})=>{
    const container=generateBlockClass(styles.container,blockClass)
    const container__item=generateBlockClass(styles.container__item,blockClass)
    const container__img=generateBlockClass(styles.container__img,blockClass)
    const img=generateBlockClass(styles.container__img,blockClass)
    const container__info=generateBlockClass(styles.container__info,blockClass)
    const label__title=generateBlockClass(styles.label__title,blockClass)
    const label__name=generateBlockClass(styles.label__name,blockClass)
    const label__quantity=generateBlockClass(styles.label__quantity,blockClass)
    const label__price=generateBlockClass(styles.label__price,blockClass)
    const price=generateBlockClass(styles.price,blockClass)
    const label__length=generateBlockClass(styles.label__length,blockClass)
    const label__total=generateBlockClass(styles.label__total,blockClass)



    const productInfo=useProduct();
    const {orderForm:{
        items,
        totalizers
    } }=useOrderForm()

        console.log("este producto tiene esta info ", productInfo)
        console.log("Esta es mi informacion de la orden",items,totalizers)
    return(
        <div className={container}>
        <p className={label__title}>Tu producto se agregó al carrito</p>
        {items.map((item:any, index:number)=>{
            console.log(item)

            return(
                <div key={index} className={container__item}>
                    <div className={container__img}>
                        <img className={img} src={item.imageUrls.at1x} />
                    </div>
                    <div className={container__info}>
                        <p className={label__name}>{item.name}</p>
                        <p className={label__quantity} >Cantidad: {item.quantity}</p>
                        <p className={label__price}>Precio por unidad </p>
                        <p className={price}> ${item.price /100}</p>

                    </div>
                </div>
            )
        })}
    
    <div>
            <p className={label__length}>Tenemos {items.length} items en tu compra</p>
            <p className={label__total}>Total: {totalizers[0]?.value/100}</p>
        </div>
        <  ButtonGroup/>
        </div>
        )
}
    export default AddToCartInfo