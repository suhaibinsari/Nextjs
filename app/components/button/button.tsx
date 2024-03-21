'use client'

import { btn } from '@/types/commonTypes'
import React from 'react'






export default function button(props:btn) {
// const onClickHandler = () =>{
//     alert("hello")
// }
    return (
    // <button onClick={()=>alert(('bye'))}>
    //     {props.title}
    // </button>
    <div>
        <button onClick={props.onclickFun}>
            {props.title}
        </button>
    </div>
  )
}
