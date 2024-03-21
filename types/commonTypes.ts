export type directorType = {
    name:string,
    age:number,
    title?: string,
    intro:string
}

export type stu = {
    name:string,
    gender:string,
    physics:number,
    maths:number,
    english:number
}


export type btn = {

    title: string,
    onclickFun: ()=> void

}

export type contactInfoType = {
    contactInfo:{
        name:string,
        email:string,
        mes:string,
        phn:number

    }
}


export type contactTypes = {

    name:string,
    email:string,
    mes:string,
    phn:number

}

export type onChangeEventType = {
    target: { value: string, name: string}
}

