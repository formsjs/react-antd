import React, {useState} from 'react'

import DynamicForm from '@formsjs/react-antd'

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [message, setMessage] = useState("")
  const [dob, setDob] = useState(new Date())
  const [file, setFile] = useState(undefined)


  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const script = [
    [
      {
        type: 'text',
        name: 'First Name',
        value: firstName,
        lg: {span: 7},
        onChange: (event) => {
          setFirstName(event.target.value)
        }
      },
      {
        type: 'text',
        name: 'Last Name',
        lg: {span: 7, offset: 1},
        value: lastName,
        onChange: (event) => {
          setLastName(event.target.value)
        }
      },
      {
        type: 'number',
        name: 'Age',
        lg: {span: 7, offset: 1},
        min: 16,
        max: 100,
        value: age,
        onChange: (value) => {
          setAge(value)
        }
      },
    ],
    [
      {
        type: 'date',
        value: dob,
        name: 'Date of Brith',
        formate: ["MM-DD-YYYY", "MM-DD-YY"],
        onChange: (event) => {
          setDob(event)
        }
      },
      {
        type: 'upload',
        name: 'File',
        onRemove: (event) => {
          setFile(undefined)
        },
        beforeUpload: async (event) => {
          setFile(await toBase64(event))
        }
      }
    ],
    [
      {
        type: 'textarea',
        name: 'Message',
        placeholder: 'Enter Your Message',
        value: message,
        onChange: (event) => {
          setMessage(event.target.value)
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
