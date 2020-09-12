import React, {useState} from 'react'

import DynamicForm from '@formsjs/react-antd'

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const script = [
    [
      {
        type: 'text',
        name: 'First Name',
        value: firstName,
        onChange: (event) => {
          setFirstName(event.target.value)
        }
      },
      {
        type: 'text',
        name: 'Last Name',
        value: lastName,
        onChange: (event) => {
          setLastName(event.target.value)
        }
      }
    ]
  ]

  return (
    <div className="w-100 p-5">
      <DynamicForm script={script}/>
    </div>
  )
}

export default App
