import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

const Select = ({ options }: any) => {

  const {id, valid}:any = useContext(InputInterfaceContext)

  return (
    <>
      <select id={id}>
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