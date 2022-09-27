import React, { createContext } from "react";
import style from "./InputInterface.module.css"
import Input from "../Input/Input";
import Select from "../Select/Select";

export const InputInterfaceContext = createContext({})

const theme = {
  valid: style.valid,
  notValid: style.notValid
}

const InputInterface = ({ children }: any) => {

  return (
    <InputInterfaceContext.Provider value={theme}>
      <form className={style.formWrapp}>
        {children}
      </form>
    </InputInterfaceContext.Provider>
  )
}

InputInterface.Input = Input
InputInterface.Select = Select


export default InputInterface