import React, { useContext } from "react";
import { InputInterfaceContext } from "../InputInterface/InputInterface";

interface SelectProps {
  options: string[]
}

const Select = ({ options }: SelectProps) => {

  const context = useContext(InputInterfaceContext)

  return (
    <>
      <select id={context?.idState}>
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