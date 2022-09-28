import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Label = ({text}: any) => {

  const {id, valid}: any = useContext(InputInterfaceContext)

  return (
    <label htmlFor={id}>{text}</label>
  )
}

export default Label

