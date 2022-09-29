import React, { ReactNode, useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface NumberProps {
  placeholder: string
  prefix?: ReactNode
  
}

const Number = ({ prefix, placeholder }: NumberProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <>
      {prefix}
      <input id={context?.idState} type="number" placeholder={placeholder} />
    </>
  )
}

export default Number