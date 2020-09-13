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
- Number
- Date
- Password
- Textarea
- Upload
- Checkbox
- Radio
- Select
- Boolean
- Dropbox
- Custom



### Text





## License

MIT © [mustafasheikh1](https://github.com/mustafasheikh1)
