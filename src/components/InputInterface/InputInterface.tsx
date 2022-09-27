import React, { createContext } from "react";
import style from "./InputInterface.module.css"
import Input from "../Input/Input";
import Select from "../Select/Select";

import phoneIcon from "../../assets/svg/phone.svg"
import mailIcon from "../../assets/svg/mail.svg"
import userIcon from "../../assets/svg/user.svg"

export const InputInterfaceContext = createContext({})
// state
const icons = {
  'user': userIcon,
  'phone': phoneIcon,
  'mail': mailIcon,
}

const theme = {
  valid: style.valid,
  notValid: style.notValid
}

const InputInterface = ({ children }: any) => {

  return (
    <InputInterfaceContext.Provider value={{icons, theme}}>
      <form className={style.formWrapp}>
        {children}
      </form>
    </InputInterfaceContext.Provider>
  )
}

InputInterface.Input = Input
InputInterface.Select = Select


export default InputInterface