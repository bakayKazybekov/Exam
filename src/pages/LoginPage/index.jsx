import { useState } from "react"
import { Autorization, Registration } from "../../components/Login"

function LoginPage () {
    const [isRegister, setIsRegister] = useState(false)

    const onSubmit = (data) => {
        if (isRegister) {
            console.log(data)
        } else {
            console.log(data, 'cvbjnkm')
        }
    }

    if (isRegister) return <Registration onSubmit={onSubmit} setIsRegister={setIsRegister}/> 
    return <Autorization onSubmit={onSubmit} setIsRegister={setIsRegister}/>
}

export default LoginPage