import React, { createContext, ReactNode, useId, useState } from "react";
import InputComponent from "../InputComponet/InputComponent";
import Select from "../Select/Select";
import { ContextState } from "../../models/models"

interface InputInterfaceProps {
  id?: string
  valid?: boolean
  children: ReactNode
}

export const InputInterfaceContext = createContext<ContextState | null>(null)

const InputInterface = ({ id, valid, children }: InputInterfaceProps) => {

  const autoId = `_field_${useId()}`
  const [idState, setIdState] = useState(id ? id : autoId)

  const [valueContext, setValueContext] = useState({ idState, setIdState, valid })

  return (
    <InputInterfaceContext.Provider value={valueContext}>
      {children}
    </InputInterfaceContext.Provider>
  )
}

InputInterface.InputComponent = InputComponent
InputInterface.Select = Select

export default InputInterface