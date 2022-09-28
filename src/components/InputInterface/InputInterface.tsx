import React, { createContext } from "react";
import style from "./InputInterface.module.css"
import InputComponent from "../InputComponet/InputComponent";
import Select from "../Select/Select";

export const InputInterfaceContext = createContext({})

const InputInterface = ({ id, valid, children }: any) => {

  return (
    <InputInterfaceContext.Provider value={{id, valid}}>
      {children}
    </InputInterfaceContext.Provider>
  )
}

InputInterface.InputComponent = InputComponent
InputInterface.Select = Select


export default InputInterface