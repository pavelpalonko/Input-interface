import React, {ReactNode, useContext } from "react";
import style from "./InputComponent.module.css"

import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface InputProps {
  label?: ReactNode
  input: ReactNode
  icon?: ReactNode
}

const Input = ({ label, input, icon }: InputProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <div className={context?.valid ? style.validStyle : style.notValidStyle}>
      {label}
      <div>
        {input}
        {icon}
      </div>
    </div>

  )
}

export default Input