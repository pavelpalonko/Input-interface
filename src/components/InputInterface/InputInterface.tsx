import React, { createContext, ReactNode, useCallback, useId, useMemo, useState } from "react";
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

  const setId = useCallback((idState: string) => setIdState(idState), [])

  const value = useMemo(() => {
    return { idState, setId, valid }
  }, [idState, setId, valid])

  return (
    <InputInterfaceContext.Provider value={value}>
      {children}
    </InputInterfaceContext.Provider>
  )
}

InputInterface.InputComponent = InputComponent
InputInterface.Select = Select


export default InputInterface