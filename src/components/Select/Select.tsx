import React, { useContext, useEffect } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Select = ({id, options }: any) => {

  const {idState, setId}: any = useContext(InputInterfaceContext)

  useEffect( () => {
    if(id)setId(id)
  },[id, setId])

  return (
    <>
      <select id={idState}>
        {
          options.map((val: string) =>
          <option key={val} value={val}>{val}</option>
          )
        }
      </select>
    </>
  )
}

export default Select