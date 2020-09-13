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
```

## Types

- [Text](#text)
- [Password](#password)
- Date
- Number
- Textarea
- Upload
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
  rowClassName: "mb-0",                      // For Row Level styles
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
  rowClassName: "mb-0",                      // For Row Level styles
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

## License

MIT © [mustafasheikh1](https://github.com/mustafasheikh1)
