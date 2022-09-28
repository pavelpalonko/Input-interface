import React, { createContext, useCallback, useId, useMemo, useState } from "react";
import style from "./InputInterface.module.css"
import InputComponent from "../InputComponet/InputComponent";
import Select from "../Select/Select";

export const InputInterfaceContext = createContext({})

const InputInterface = ({ valid, children }: any) => {

  const id = useId()
  const [idState, setIdState] = useState(`${children.props.input.type.name}_field_${id}`)

  const setId = useCallback((idState: any) => setIdState(idState), [])

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