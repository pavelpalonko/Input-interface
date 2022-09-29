import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface TextProps {
  name?: string
  placeholder?: string
}

const Text = ({name, placeholder }: TextProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <input id={context?.idState} type="text" name={name} placeholder={placeholder} />
  )
}

export default Text