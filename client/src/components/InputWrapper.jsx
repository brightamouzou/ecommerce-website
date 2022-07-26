import React from 'react'

function InputWrapper(props) {
  return <div  className={"inputWrapper "+props.className}>{props.children}</div>;
}

export default InputWrapper