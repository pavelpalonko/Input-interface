import React, { createContext, useCallback, useMemo, useState } from "react";
import style from "./InputInterface.module.css"
import InputComponent from "../InputComponet/InputComponent";
import Select from "../Select/Select";
import { randId } from "../../utils/utils";

export const InputInterfaceContext = createContext({})

const InputInterface = ({ valid, children }: any) => {

  const [idState, setIdState] = useState(`${children.props.input.type.name}_field_${randId()}`)

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