'use client'
import React, { use, useState } from 'react'
import * as yup from 'yup'
import DisplayContact from '../components/DisplayContact'
import { contactInfoType, contactTypes, onChangeEventType } from '@/types/commonTypes'




const contactInfoValidatioin = yup.object().shape({
    // message: yup.string().required().min(12),
    email: yup.string().email().required(),
    name: yup.string().required().min(5)
})


export default function Page() {

    // const [contactInfo, setContactInfo] = useState<contactTypes>({
    //     name: "",
    //     email: "",
    //     mes: ""
    // })


    const submit = () => {
        alert('ss')
    }
    // // var userName:string = 'def'
    // const [userName, setUserName] = useState<string>("")

    // const getUserName = (e: onChangeEventTypee) => {
    //     console.log(getUserName, e.target.value)
    //     // userName =e.target.value
    //     setUserName(e.target.value)
    // }


    // const [userEmail, setuserEmail] = useState<string>("")
    // const getuserEmail = (e: onChangeEventTypee) => {
    //     console.log(getuserEmail, e.target.value)
    //     // userName =e.target.value
    //     setuserEmail(e.target.value)
    // }

    // const [userMes, setUserMes] = useState<string>("")
    // const getUserMes = (e: onChangeEventTypee) => {
    //     console.log(getUserMes, e.target.value)
    //     setUserMes(e.target.value)
    // }

    // // const onChangeHandler = (e: onChangeEventTypee) => {
    // //     console.log(e.target.name)

    // //     if (e.target.name == userName) {
    // //         setUserName(e.target.value)
    // //     }
    // //     else setuserEmail(e.target.value)


    // // }




    // const onChangeHandler = (e: onChangeEventTypee) => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)

    //     let userDet = {
    //         ...contactInfo,
    //         [e.target.name]:[e.target.value]
    //         }
    //         setContactInfo(userDet)
    //     // if (e.target.name == userName) {
    //     //     setUserName(e.target.value)
    //     // }
    //     // else setuserEmail(e.target.value)


    // }

    const [contactInfo, setContactInfo] = useState<contactTypes>({
        name: "",
        email: "",
        mes: "",
        phn: 0
    })
    const [errors, setErrors] = useState<string[]>([])


    const onChangeHandler = (e: onChangeEventType) => {
        let userDetails = {
            ...contactInfo, [e.target.name]: e.target.value
        }
        setContactInfo(userDetails)
        console.log(contactInfo)
    }
    const [contactList, setContactList] = useState<contactTypes[]>([])

    const onClickHandler = async () => {

        try {
            const result = await contactInfoValidatioin.validate(contactInfo)
            console.log(result)

            if (!result) {
                return
            }


            // if (!contactInfo.name) {
            //     alert('Please enter Name')
            //     return
            // }
            // else if (!contactInfo.email) {
            //     alert('Please Enter Email')
            //     return
            // }
            // else if (!contactInfo.phn) {
            //     alert('Please Enter Phone#')
            //     return
            // }


            let newContactList: contactTypes[] = [...contactList, contactInfo]
            setContactList(newContactList)
            console.log('newContactList', newContactList)

            setErrors([])


            setContactInfo({
                name: "",
                email: "",
                mes: "",
                phn: 0
            })
        } catch (err) {
            setErrors(err.errors)
            console.log('error', err.errors)
        }



    }


    return (
        <div className="max-w-md mx-auto  bg-white">
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input onChange={onChangeHandler} value={contactInfo.name} type="text" name="name" id="name" autoComplete="name" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input onChange={onChangeHandler} type="email" value={contactInfo.email} name="email" id="email" autoComplete="email" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input onChange={onChangeHandler} type="number" value={contactInfo.phn} name="phn" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" ></input>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea onChange={onChangeHandler} id="message" value={contactInfo.mes} name="mes" rows={4} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" ></textarea>
                </div>
                {errors.map((item) => {
                    return (
                        <div key={item} style={{ color: 'red' }}>
                            <h1>{item}</h1>
                        </div>
                    )
                })}
                <div>
                    <button onClick={onClickHandler} type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
            {/* <DisplayContact contactTypes={contactInfo} /> */}
            <DisplayContact contactTypes={contactList} />
        </div>
    )
}
