import React, { useContext } from "react";

import { InputInterfaceContext } from "../InputInterface/InputInterface";
import Label from "../Label/Label";

const Input = ({ label, icon, type, valid, ...props }: any) => {

  const theme: any = useContext(InputInterfaceContext)

  return (
    <div>
      <Label id={props.id} text={label} />

      <input
        type={type}
        className={valid ? theme.valid : theme.notValid}
        {...props}
      />
      
      {icon}
    </div>

  )
}

export default Input