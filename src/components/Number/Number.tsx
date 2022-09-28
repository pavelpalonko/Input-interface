import React, { useContext, useEffect } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Number = ({ prefix, id, ...props }: any) => {

  const {idState, setId}: any = useContext(InputInterfaceContext)

  useEffect( () => {
    if(id)setId(id)
  },[id, setId])

  return (
    <>
      {prefix}
      <input id={idState} type="number" {...props} />
    </>

  )
}

export default Number