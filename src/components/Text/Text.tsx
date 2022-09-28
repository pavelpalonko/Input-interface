import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Text = ({...props}) => {

  const {id, valid}: any = useContext(InputInterfaceContext)

  return (
    <input id={id} type="text" {...props} />
  )
}

export default Text