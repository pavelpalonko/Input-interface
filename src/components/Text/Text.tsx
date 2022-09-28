import React, { useContext, useEffect } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Text = ({id, ...props}: any) => {

  const {idState, setId}: any = useContext(InputInterfaceContext)

  useEffect( () => {
    if(id)setId(id)
    
  },[id, setId])

  return (
    <input id={idState} type="text" {...props} />
  )
}

export default Text