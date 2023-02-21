import { useState } from "react"

function CreateContactForm(){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const handleFirstName=(e)=>{
    setFirstName(e.target.value)
    }
    const handleLastName=(e)=>{
setLastName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleSave=(e)=>{
        e.preventDefault()
       console.log(firstName,lastName,email)
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="First name" onChange={handleFirstName}/>
                <input type="text" placeholder="Last name" onChange={handleLastName}/>
                <input type="email" placeholder=" Email" onChange={handleEmail}/>
                <button onClick={handleSave}>Save</button>
            </form>
        </div>
    )
}
export default CreateContactForm