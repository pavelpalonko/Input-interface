import React, {ReactNode, useContext } from "react";

import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface InputProps {
  label?: ReactNode
  input: ReactNode
  icon?: ReactNode
}

const Input = ({ label, input, icon }: InputProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <div >
      {label}
      <div>
        {input}
        {icon}
      </div>
    </div>

  )
}

export default Input