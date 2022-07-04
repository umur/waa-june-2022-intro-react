import React, { useState } from "react";

export default function CreatePerson() {

    const initialState = { Id : '', fname: '', lname: '', zip: '' }
    const [savePersonState, setSavePersonState] = useState(initialState); 

    const fieldChanged = (event) => {
        const copyState = { ...savePersonState };
        copyState[event.target.name] = event.target.value;
        setSavePersonState(copyState);
    }

    const onClicked=()=>{
            console.log(savePersonState)
    }

    return (
        <div>
            Id : <input
                type='text'
               
                defaultValue={savePersonState.Id}
                name='Id'
                onChange={(event) => { fieldChanged(event) }}
            />
            <br />

            Firstname: <input
                type='text'
               defaultValue={savePersonState.fname}
                name='fname'
                onChange={(event) => { fieldChanged(event) }}
            />
            <br />

            Lastname: <input
                type='text'
                name="lname"
                defaultValue={savePersonState.lname}
                onChange={(event) => { fieldChanged(event) }}
            />

            <br />

            Zip: <input
                type='text'
                name="zip"
                defaultValue={savePersonState.zip}
                onChange={(event) => { fieldChanged(event) }}
            />

            <br />

            <input
                type='button'
                value='Save'
                onClick={onClicked}
            />
        </div>
    )

}
