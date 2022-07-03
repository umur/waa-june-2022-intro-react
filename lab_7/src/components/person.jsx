import React from 'react'

const person = (props) => {
  return (
    <div>

        {
            props.persons.map((item))
        }
    </div>
  )
}

export default person