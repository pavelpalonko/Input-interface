import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Number = ({ prefix, ...props }: any) => {

  const { id, valid}: any = useContext(InputInterfaceContext)

  return (
    <>
      {prefix}
      <input id={id} type="number" {...props} />
    </>

  )
}

export default Number