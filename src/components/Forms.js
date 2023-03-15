import React, {useState} from 'react'



export default function Forms(props) {
    const [userName, SetUserName]=useState(" ")
const [userAge, SetUserAge]=useState(" ")
    const UserNameHandler=(e)=>
    {
        SetUserName(e.target.value)
    }
    const UserAgeHandler =(e)=>
    {
        SetUserAge(e.target.value)
    }
    
    const AddUserHandler=async(e)=>
    {   e.preventDefault() ;
        const savedUserData={
        
        Name: userName,
        Age: userAge
    }
        await props.onSubmitForm(savedUserData)
        SetUserName("")
        SetUserAge("")
     
    }
  return (
    <div>
    <form>
        <label>UserName</label>
        <input type='text' value={userName} onChange={UserNameHandler} ></input>
        <label>Age</label>
        <input type='number' value={userAge} onChange={UserAgeHandler}></input>
        <input type="submit" value="Add user" onClick={AddUserHandler} />
    </form>
    </div>
      
  )
}
