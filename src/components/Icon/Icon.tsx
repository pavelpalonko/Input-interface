import React from "react";
import style from "./Icon.module.css"

const Icon = ({ icon }: any) => {

  return (
    <>
      {
        icon
          ? <img className={style.icon} src={icon}>
          </img>
          : null
      }
    </>
  )
}

export default Icon