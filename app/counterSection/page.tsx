'use client'

import { useState } from 'react';

import React from 'react'
import Button from '../components/button/button'

export default function counterSection() {

var count:number = 0;

const[countState, setCountState] = useState(0)


const onClicpluskHandler = () =>{
    count = count+1;
    setCountState(countState+1)
    console.log(count)
    // alert('aaaa')
}
const onClicmminuskHandler = () =>{
    count = count-1;
    setCountState(countState-1)
    console.log(count)
}

const setRest =()=>{
    setCountState(0)
}


    return (
    <div>
        <Button title="+" onclickFun={onClicpluskHandler}/>
            {count}
        <Button title="-" onclickFun={onClicmminuskHandler}/>
        <Button title="+" onclickFun={onClicpluskHandler}/>
            {countState}
        <Button title="-" onclickFun={onClicmminuskHandler}/>
        <Button title="reset" onclickFun={setRest}/>

    </div>
  )
}
