
import React from "react";
import Person from "./Person";


function Persons(props){  // accepting  the  persons  list 

    return (
        <div>
            {
                props.persons.map((item)=>{
                 return   <Person 
                         Id= {item.id}
                        fname= {item.firstName}
                        lname={item.lastName}
                        zip= {item.zip}
                        />
                })
            }
        </div>
    )

}

export default Persons;
