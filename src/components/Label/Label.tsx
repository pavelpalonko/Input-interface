import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Label = ({text}: any) => {

  const {idState, valid}: any = useContext(InputInterfaceContext)

  return (
    <label htmlFor={idState}>{text}</label>
  )
}

export default Label

