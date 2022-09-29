import React, { ReactNode, useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface NumberProps {
  prefix?: ReactNode
  [propName: string]: any
}

const Number = ({ prefix, ...props }: NumberProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <>
      {prefix}
      <input id={context?.idState} type="number" {...props} />
    </>
  )
}

export default Number