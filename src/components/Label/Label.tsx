import React, {ReactNode, useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface LabelProps {
  children: ReactNode
}

const Label = ({children}: LabelProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <label htmlFor={context?.idState}>{children}</label>
  )
}

export default Label

