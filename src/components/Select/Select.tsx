import React from "react";
import Label from "../Label/Label";

const Select = ({ id }: any) => {

  return (
    <>
      <Label id={id}/>
      <select id={id}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </>
  )
}

export default Select