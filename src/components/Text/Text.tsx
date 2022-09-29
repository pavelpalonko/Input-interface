import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface TextProps {
  [propName: string]: any
}

const Text = ({ ...props }: TextProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <input id={context?.idState} type="text" {...props} />
  )
}

export default Text