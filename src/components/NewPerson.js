import React, {useState} from 'react'
import Forms from './Forms'
import NewPersonRow from './NewPersonRow';


export default function NewPerson() {
    const[SavingData,setSavingData]=useState([])
    const saveDataHandler=(savedata)=>
    {
       const savedData=
       {...savedata,
        key: Math.random().toString()};
        setSavingData(prevsaveData=>{
          return[savedata,...prevsaveData]})
        console.log("save data", savedData)
        console.log("savingdata", SavingData)
    }
  return (
    <div>
      <Forms onSubmitForm={saveDataHandler}/>
      
       <table>
        {SavingData.map((x)=>(<tr><td>{x.Name}</td>----<td>{x.Age}</td></tr> ))}
        </table>
    </div>
  )
}
