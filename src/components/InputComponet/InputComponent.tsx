import React, { useContext } from "react";

import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Input = ({ label, input, icon }: any) => {

  const theme: any = useContext(InputInterfaceContext)

  return (
    <div >
      {label}
      <div>
        {input}
        {icon}
      </div>
    </div>

  )
}

export default Input