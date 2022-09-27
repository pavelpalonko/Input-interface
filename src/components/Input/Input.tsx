import React, { useContext } from "react";
import Icon from "../Icon/Icon";

import { InputInterfaceContext } from "../InputInterface/InputInterface";
import Label from "../Label/Label";

const Input = ({ label, iconType, type, valid, ...props }: any) => {

  const { icons, theme }: any = useContext(InputInterfaceContext)

  return (
    <div>
      <Label id={props.id} text={label} />

      <input
        type={type}
        className={valid ? theme.valid : theme.notValid}
        {...props}
      />

      <Icon icon={icons[iconType]} />
    </div>

  )
}

export default Input