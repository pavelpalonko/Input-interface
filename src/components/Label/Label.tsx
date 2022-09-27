import React from "react";

const Label = ({id, text}: any) => {

  return (
    <label htmlFor={id}>{text}</label>
  )
}

export default Label

