# @formsjs/react-antd

> A Dynamic Form Generating library based in antd for all who hate creating forms

[![NPM](https://img.shields.io/npm/v/@formjs/react-antd.svg)](https://www.npmjs.com/package/@formsjs/react-antd) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @formsjs/react-antd
```

## Usage

```jsx
import React, {useState} from 'react'

import DynamicForm from '@formsjs/react-antd'

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [message, setMessage] = useState("")

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
    ],
    [
      {
        type: 'number',
        name: 'Age',
        value: age,
        onChange: (value) => {
          setAge(value)
        }
      },
      {
        type: 'textarea',
        name: 'Message',
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
```

## Types

- [Text](#text)
- [Password](#password)
- [Date](#date)
- [Number](#number)
- [Textarea](#textarea)
- [Upload](#upload)
- Checkbox
- Radio
- Select
- Boolean
- Dropbox
- Custom

### Text

```jsx
{
  type: 'text',
  name: 'First Name',
  value: firstName,
  onChange: (event) => {
    setFirstName(event.target.value)
  }
}
```

#### Optional Props (Text)

```jsx
{
  placeholder: "First Name",                 // For placeholders
  fieldStyle: {fontSize: 12},                // For custom Style Injections
  fieldClassName: "font-weight-bold",        // For custom css class injection
  customLable: <label>Required</label>,      // For small labels on top
  fieldId: "my-id",                          // For custom css id's
  disabled: false                            // For disabling the field
  colClassName: "text-right",                // For Column Level styles
  bottomElement: <label>Bottom Element</label>,
  /*
    Any JSX element that you may like at the bottom
  */
  lg: 24,
  /*
    lg: 1 to 24 or { span: 11, offset: 1 }
    Just like antd grid System
  */
}
```

### Password

```jsx
{
  type: 'password',
  name: 'Password',
  value: password,
  onChange: (event) => {
    setPassword(event.target.value)
  }
}
```

#### Optional Props (Password)

```jsx
{
  placeholder: "First Name",                 // For placeholders
  fieldStyle: {fontSize: 12},                // For custom Style Injections
  fieldClassName: "font-weight-bold",        // For custom css class injection
  customLable: <label>Required</label>,      // For small labels on top
  disabled: false                            // For disabling the field
  colClassName: "text-right",                // For Column Level styles
  bottomElement: <label>Bottom Element</label>,
  /*
    Any JSX element that you may like at the bottom
  */
  lg: 24,
  /*
    lg: 1 to 24 or { span: 11, offset: 1 }
    Just like antd grid System
  */
}
```

### Date

```jsx
{
  type: 'date',
  value: dob,                   //value = typeof(Date)
  name: 'Date of Brith',
  onChange: (event) => {
    setDob(event)
  }
}
```

#### Optional Props (Date)

```jsx
{
  placeholder: "MM-DD-YYYY",                 // For placeholders
  fieldStyle: {fontSize: 12},                // For custom Style Injections
  fieldClassName: "font-weight-bold",        // For custom css class injection
  disabled: false                            // For disabling the field
  colClassName: "text-right",                // For Column Level styles
  formate: ["MM-DD-YYYY", "MM-DD-YY"],       // For Date Formate DEFAULT: ["DD/MM/YYYY", "DD/MM/YY"]
  lg: 24,
  /*
    lg: 1 to 24 or { span: 11, offset: 1 }
    Just like antd grid System
  */
}
```

### Number

```jsx
{
  type: 'number',
  value: count,
  name: 'Number',
  onChange: (value) => {
    setCount(value)
  }
}
```

#### Optional Props (Number)

```jsx
{
  placeholder: "Count",                      // For placeholders
  fieldStyle: {fontSize: 12},                // For custom Style Injections
  fieldClassName: "font-weight-bold",        // For custom css class injection
  disabled: false                            // For disabling the field
  colClassName: "text-right",                // For Column Level styles
  min: 0,                                    // For Min value
  max: 10,                                   // For max value
  lg: 24,
  /*
    lg: 1 to 24 or { span: 11, offset: 1 }
    Just like antd grid System
  */
}
```

### Textarea

```jsx
{
  type: 'textarea',
  name: 'Message',
  value: message,
  onChange: (event) => {
    setMessage(event.target.value)
  }
}
```

#### Optional Props (Textarea)

```jsx
{
  placeholder: "Message",                    // For placeholders
  fieldStyle: {fontSize: 12},                // For custom Style Injections
  fieldClassName: "font-weight-bold",        // For custom css class injection
  customLable: <label>Required</label>,      // For small labels on top
  fieldId: "my-id",                          // For custom css id's
  disabled: false                            // For disabling the field
  colClassName: "text-right",                // For Column Level styles
  autoSize: true,                            // For Autosizing
  bottomElement: <label>Bottom Element</label>,
  /*
    Any JSX element that you may like at the bottom
  */
  lg: 24,
  /*
    lg: 1 to 24 or { span: 11, offset: 1 }
    Just like antd grid System
  */
}
```

### Upload

```jsx
{
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
}
```

#### Optional Props (Upload)

```jsx
{
  placeholder: "File",                       // For placeholders
  fieldStyle: {fontSize: 12},                // For custom Style Injections
  fieldClassName: "font-weight-bold",        // For custom css class injection
  fieldId: "my-id",                          // For custom css id's
  disabled: false                            // For disabling the field
  colClassName: "text-right",                // For Column Level styles
  multiple: false,
  accept: '.doc,.docx',
  method: 'post',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onRemove: (event) => {
    setFile(undefined)
  },
  beforeUpload: async (event) => {
    setFile(await toBase64(event))
  },
  onChange: (event) => {
    console.log(event)
  }
  lg: 24,
  /*
    lg: 1 to 24 or { span: 11, offset: 1 }
    Just like antd grid System
  */
}
```

##### toBase64

```jsx
const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
```

## License

MIT © [mustafasheikh1](https://github.com/mustafasheikh1)
